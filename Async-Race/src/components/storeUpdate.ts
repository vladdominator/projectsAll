import { store } from "../shared/api/store";
import { deleteEvents, updateEvents } from "./cars/raceClick";

export function storeUpdate(): void {
  const inputCreate = document.querySelector('#input__create') as HTMLInputElement;
  const inputCreateColor = document.querySelector('#input__color-create') as HTMLInputElement;
  if (store.updateCar) {
    const inputUpdate = document.querySelector('.input__update') as HTMLInputElement;
    const inputUpdateColor = document.querySelector('.input__color-update') as HTMLInputElement;
    const buttonUpdate = document.querySelector('.button__update');
    if (!inputUpdateColor || !inputUpdateColor) return;
    inputUpdate?.classList.add('input__update-active');
    inputUpdateColor?.classList.add('input__color-update-active');
    buttonUpdate?.classList.add('button__update-active');
    inputUpdate.value = store.storeInputUpdate;
    inputUpdateColor.value = store.storeColorUpdate;
    if (store.storeUpdateItem) store.storeUpdateItem();
  }
  if (!inputCreate || !inputCreateColor) return;
  inputCreate.value = store.storeInputCreate;
  inputCreateColor.value = store.storeColorCreate;
  if (store.isRace) {
    const buttonRace = document.querySelector('.settings__race');
    buttonRace?.classList.add('settings__race-active');
  }
  if (store.isActive) {
    deleteEvents();
  } else {
    updateEvents();
  }
}