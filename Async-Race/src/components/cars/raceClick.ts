import { store } from "../../shared/api/store";
import { WinnersForm } from "../winnerPopup/winnerPopup";
import { saveWinner } from "../winnersPage/saveWinner";
import { addState } from "./startEngine";
import { getCar } from "./getCar";

function updateEvents(): void {
  const buttonGenerate = document.querySelector('.generate__cars');
  if (!buttonGenerate) return;
  buttonGenerate?.classList.remove('generate__cars-active');
  const buttonAction = document.querySelectorAll('.car__buttons-action');
  buttonAction.forEach((item) => {
    item.classList.remove('car__buttons-action-active');
  })
  const buttonCreate = document.querySelector('#button__create_car');
  buttonCreate?.classList.remove('button__create-active');
  const resetButton = document.querySelector('.reset__race');
  resetButton?.classList.remove('reset__race-remove');
}
function removePopup(): void {
  const buttonClosePopup = document.querySelector('.button__remove-popup');
  buttonClosePopup?.addEventListener('click', () => {
    document.querySelector('.winners__popup')?.remove();
    document.body.classList.remove('body-lock');
    store.isActive = false;
    updateEvents();
  })
} 
async function addPopupWinner(id: string | undefined, time: number | undefined): Promise<void> {
  const request = await getCar(id);
  const main = document.querySelector('main');
  if (time) {
    main?.append((new WinnersForm(request.name, Number((time / 1000).toFixed(2)))).element);
    document.body.classList.add('body-lock');
    removePopup();
  }
}
async function race(): Promise<void> {
  const cars = document.querySelectorAll('.car__item');
  let itsTrue = true;
  await cars.forEach(async(item) => {
    const buttonDrive = item?.querySelector('.button__drive');
    if(!buttonDrive) return;
    const carState = await addState(item.id, buttonDrive);
    if (carState?.success && itsTrue && Object.keys(carState).length !== 0) {
      itsTrue = false;
      addPopupWinner(carState.id, carState.time);
      if (carState.time) {
        saveWinner(carState.id, Number((carState.time / 1000).toFixed(2)));
      }
    }
  });
}
function deleteEvents(): void {
  const buttonGenerate = document.querySelector('.generate__cars');
  buttonGenerate?.classList.add('generate__cars-active');
  const buttonAction = document.querySelectorAll('.car__buttons-action');
  buttonAction.forEach((item) => {
    item.classList.add('car__buttons-action-active');
  })
  const buttonCreate = document.querySelector('#button__create_car');
  buttonCreate?.classList.add('button__create-active');
  const resetButton = document.querySelector('.reset__race');
  resetButton?.classList.add('reset__race-remove');
}
function raceClick(): void {
  const buttonRace = document.querySelector('.settings__race');
  buttonRace?.addEventListener('click', async() => {
    deleteEvents();
    store.isActive = true;
    store.isRace = true;
    await buttonRace?.classList.add('settings__race-active');
    await race();
  })
}
export { raceClick, deleteEvents, updateEvents}