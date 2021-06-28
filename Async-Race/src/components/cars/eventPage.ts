import { store } from "../../shared/api/store";
import { getCars } from "./apiCars";

export async function eventPage(): Promise<void> {
  const next = document.querySelector('.next__garage');
  const prev = document.querySelector('.prev__garage');
  let countPage: number;
  async function prevPage() {
    if (store.page > 1) {
      const main = document.querySelector('.garage');
      if (main) main.innerHTML = ``;
      store.page--;
      await getCars(store.page, 7); 
    }  else prev?.classList.remove('prev__garage-active');
  }
  async function nextPage() {
    countPage = Math.ceil(Number(store.countCars) / 7);
    if (countPage > store.page) {
      const main = document.querySelector('.garage');
      if (main) main.innerHTML = ``;
      store.page++;
      await getCars(store.page, 7);
    }
  }
  if (next == null || prev === null) return;
  next.addEventListener('click', nextPage);
  prev.addEventListener('click', prevPage);
  
}