import { store } from "../../shared/api/store";

export function updateGarage(): void {
  const prevItem = document.querySelector('.prev__garage');
  const nextItem = document.querySelector('.next__garage');
  if (store.page > 1) prevItem?.classList.add('prev__garage-active');
  else prevItem?.classList.remove('prev__garage-active');
  if (store.page * 7 < store.countCars) nextItem?.classList.add('next__garage-active');
  else nextItem?.classList.remove('next__garage-active');
}