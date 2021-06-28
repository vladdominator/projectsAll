import { store } from "../../shared/api/store";

export function updateWinnersPage(): void {
  const prevItem = document.querySelector('.prev__winners');
  const nextItem = document.querySelector('.next__winners');
  if (store.winnersPage > 1) prevItem?.classList.add('prev__winners-active');
  else prevItem?.classList.remove('prev__winners-active');
  if (store.winnersPage * 10 < store.countWinners) nextItem?.classList.add('next__winners-active');
  else nextItem?.classList.remove('next__winners-active');
  const time = document.querySelector(`.time`);
  const wins = document.querySelector('.wins');
  const sortItem = document.querySelector(`.${store.sort}`);
  if (store.sort === 'time') {
    time?.classList.remove('disable');
    wins?.classList.add('disable')
  } else {
    wins?.classList.remove('disable');
    time?.classList.add('disable')
  }
  if (store.sortOrder === 'desc') {
    sortItem?.classList.add('sort');
  } else {
    sortItem?.classList.remove('sort');
  }
  
}