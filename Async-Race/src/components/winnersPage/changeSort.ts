import { store } from "../../shared/api/store";
import { getWinners } from "./getWinners";

async function sortItems(sort: string): Promise<void> {
  const sortItem = document.querySelector(`.${sort}`);
  const storeSortItem = document.querySelector(`.${store.sort}`);
  if (store.sort !== sort) {
    storeSortItem?.classList.add('disable');
    sortItem?.classList.remove('disable'); 
  }
  store.sortOrder = store.sortOrder === 'asc' ? 'desc' : 'asc';
  if (store.sortOrder === 'desc') {
    sortItem?.classList.add('sort');
  } else {
    sortItem?.classList.remove('sort');
  }
  store.sort = sort;
  const main = document.querySelector('.winners_car-items');
  if(main) main.innerHTML = ``;
  await getWinners(store.winnersPage, 10, store.sort, store.sortOrder);
}
export function changeSort(): void {
  const sortTime = document.querySelector('.time__property');
  const sortWins = document.querySelector('.wins__property');
  sortTime?.addEventListener('click', () => sortItems('time'));
  sortWins?.addEventListener('click', () => sortItems('wins'));
}