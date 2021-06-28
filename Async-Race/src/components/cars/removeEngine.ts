import { store } from "../../shared/api/store";
import { engine } from "./base";
import { SuccesDrive } from "./successDrive";

async function stopEngine(id: string | undefined): Promise<SuccesDrive> {
  if (!id) return {};
  return (await fetch(`${engine}?id=${id}&status=stopped`)).json();
}
async function addState(id: string | undefined, item: Element): Promise<void> {
  if (!id) return;
  if (store.animation[id]) store.animation[id].stopped = true;
  await stopEngine(id);
  item.previousElementSibling?.classList.remove('button__drive-active');
  const car = item.parentElement?.querySelector('.car__image') as HTMLElement;
  car.style.transform = 'translateX(0)';
  if (store.animation[id]) window.cancelAnimationFrame(store.animation[id].id as number);
}
function stopItemEngine(item: Element): void {
  item.classList.remove('button__stop-drive-active');
  addState(item?.parentElement?.parentElement?.parentElement?.id, item);
}

function removeEngine(): void {
  const stopButtonEngine = document.querySelectorAll('.button__stop-drive');
  stopButtonEngine.forEach((item) => {
    item.addEventListener('click', () => stopItemEngine(item))
  })
} 
export { removeEngine, stopItemEngine }