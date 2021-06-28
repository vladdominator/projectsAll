import { store } from "../../shared/api/store";
import { getWinners } from "./getWinners";

export function eventWinnersPage(): void {
  const next = document.querySelector('.next__winners');
  const prev = document.querySelector('.prev__winners');
  let countPage: number;
  function prevPage() {
    if (store.winnersPage > 1) {
      const main = document.querySelector('.winners_car-items');
      if (main) main.innerHTML = ``;
      store.winnersPage--;
      getWinners(store.winnersPage, 10, store.sort, store.sortOrder); 
    }  else prev?.classList.remove('prev__winners-active');
  }
  async function nextPage(): Promise<void> {
    countPage = Math.ceil(Number(store.countWinners) / 10);
    if (countPage > store.winnersPage) {
      const main = document.querySelector('.winners_car-items');
      if (main) main.innerHTML = ``;
      store.winnersPage++;
      await getWinners(store.winnersPage, 10, store.sort, store.sortOrder); 
    }
  }
  if (next == null || prev === null) return;
  next.addEventListener('click', nextPage);
  prev.addEventListener('click', prevPage);
}