import { store } from '../../shared/api/store';
import { animation } from './animationCars';
import { engine } from './base';
import { getDistanceBetweenElement } from './distanceBetweenElement';
import { SuccesDrive } from './successDrive';

interface Engine {
  velocity?: number,
  distance?: number,
}

async function drive(id: string): Promise<SuccesDrive> {
  const res = await fetch(`${engine}?id=${id}&status=drive`).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
}
async function startEngine(id: string | undefined): Promise<Engine> {
  if (!id) return {};
  if (store.animation[id]) store.animation[id].stopped = false;
  return (await fetch(`${engine}?id=${id}&status=started`)).json();
}
async function addState(id: string | undefined, button: Element): Promise<SuccesDrive | undefined> {
  if (!id) return {};
  button.classList.add('button__drive-active');
  const { velocity, distance } = await startEngine(id);
  if (!distance || !velocity) return {};
  const time = Math.round(distance / velocity);
  const cars = document.querySelectorAll('.car__item');
  let car;
  let flag;
  cars.forEach((item) => {
    if (item.id === id) {
      item.querySelector('.button__stop-drive')?.classList.add('button__stop-drive-active');
      car = item.querySelector('.car__image');
      flag = item.querySelector('.field__flag');
    }
  })
  if (!car || !flag) return {};
  const HTML_DISTANCE = Math.floor(getDistanceBetweenElement(car, flag)) + 90;
  store.animation[id] = animation(car as HTMLElement, HTML_DISTANCE, time);
  const { success } = await drive(id);
  if (!success) {
    store.animation[id].end = await true;
    await window.cancelAnimationFrame(store.animation[id].id as number);
  }
  if (!store.animation[id].stopped) return { success, id, time };
  return {};
}
function startItemEngine(item: Element): void {
  addState(item?.parentElement?.parentElement?.parentElement?.id, item);
}
function addEngine (): void {
  const startButtonsEngine = document.querySelectorAll('.button__drive');
  if (!startButtonsEngine) return;
  Object.keys(store.animation).forEach((id) => {
    const cars = document.querySelectorAll('.car__item');
    cars?.forEach((item) => {
      if(item.id === id) {
        item.querySelector('.button__drive')?.classList.add('button__drive-active');
        item.querySelector('.button__stop-drive')?.classList.add('button__stop-drive-active');
        const itemCar = item.querySelector('.car__image') as HTMLElement;
        if (store.animation[id].end) {
          itemCar.style.transform = `translate(${store.animation[id].distance}px)`;     
        }
        if (store.animation[id].stopped) {
          itemCar.style.transform = 'translateX(0)'; 
          item.querySelector('.button__drive')?.classList.remove('button__drive-active');
          item.querySelector('.button__stop-drive')?.classList.remove('button__stop-drive-active');    
        }
      }
    })
  })
  startButtonsEngine.forEach((item) => {
    item.addEventListener('click', () => startItemEngine(item));
  })
}
export { addEngine, addState };