import { store } from "../../shared/api/store";
import { updateEvents } from "./raceClick";
import { stopItemEngine } from "./removeEngine";

function cancelRace(): void {
  const cars = document.querySelectorAll('.car__item');
  cars.forEach(async(item) => {
    const buttonDrive = item?.querySelector('.button__stop-drive');
    if(!buttonDrive) return;  
    await stopItemEngine(buttonDrive);
  });
}
export function resetClick(): void {
  const buttonReset = document.querySelector('#reset__cars');
  buttonReset?.addEventListener('click', () => {
    store.isRace = false;
    store.isActive = false;
    updateEvents();
    buttonReset?.previousElementSibling?.classList.remove('settings__race-active');
    cancelRace();
  })
}