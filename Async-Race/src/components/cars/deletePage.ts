import { store } from "../../shared/api/store";
import { getCars } from "./apiCars";

export async function deletePage(): Promise<void> {
  const cars = document.querySelectorAll('.car__item');
  cars.forEach((items) => {
    items.remove();
  })
  await getCars(store.page, 7);
}