import { clearInput } from "../../shared/api/clearInput";
import { store } from "../../shared/api/store";
import { garage } from "./base";
import { deletePage } from "./deletePage";

const rgb2hex = (rgb: string): string | undefined =>{
  if (rgb) {
    return `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)?.slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;
  }
  return '';
}
async function updateState(element: Element) {
  const buttonUpdate = await document.querySelector('#button__update_car');
  async function addState(item: Element) {
    const inputUpdate = (document.querySelector('#input__update') as HTMLInputElement).value;
    const colorInputUpdate = (document.querySelector('#input__color-update') as HTMLInputElement).value;
    if (inputUpdate.trim().length === 0 || colorInputUpdate === '#000000') {
      return;
    }
    const bodyCar = {
      "color": colorInputUpdate, 
      "name": inputUpdate
    };
    (await fetch(`${garage}/${item.parentElement?.parentElement?.id}`, {
      method: "PUT",
      body: JSON.stringify(bodyCar),
      headers: {
        'Content-Type': 'application/json'
      }
    })).json();
    await deletePage();
    await clearInput(document.querySelector('#input__update') as HTMLInputElement, 
      (document.querySelector('#input__color-update') as HTMLInputElement));
    buttonUpdate?.classList.remove('button__update-active');
    document.querySelector('.input__update')?.classList.remove('input__update-active');
    document.querySelector('.input__color-update')?.classList.remove('input__color-update-active');
    store.updateCar = false;
  }
  function addStateProperty(): void {
    addState(element);
    buttonUpdate?.removeEventListener('click', addStateProperty)
  }
  buttonUpdate?.addEventListener('click', addStateProperty);
}
async function updateInput(item: Element): Promise<void> {
  document.querySelector('.input__update')?.classList.add('input__update-active');
  document.querySelector('.input__color-update')?.classList.add('input__color-update-active');
  document.querySelector('.button__update')?.classList.add('button__update-active');
  let colorNowFill;
  const carNameNow = item.parentElement?.querySelector('.car__name')?.textContent?.trim();
  const colorNow = item.parentElement?.parentElement?.querySelector('#glyph');
  if(colorNow) colorNowFill = window.getComputedStyle(colorNow, null).fill;
  let colorNowFillHex;
  if(colorNowFill) colorNowFillHex = rgb2hex(colorNowFill);
  if (carNameNow) (document.querySelector('#input__update') as HTMLInputElement).value = carNameNow;
  if (colorNowFillHex) (document.querySelector('#input__color-update') as HTMLInputElement).value = colorNowFillHex;
  store.updateCar = true;
  store.storeInputUpdate = (document.querySelector('#input__update') as HTMLInputElement).value;
  store.storeColorUpdate = (document.querySelector('#input__color-update') as HTMLInputElement).value;
  store.storeUpdateItem = () => updateState(item);
  updateState(item);
}
export async function updateCar(e: Event): Promise<void> {
  const buttonUpdate = <HTMLElement>e.target;
  if (buttonUpdate.id === 'car__select') {
    updateInput(buttonUpdate);
  }
}
