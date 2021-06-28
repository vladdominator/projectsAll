import { CarsI } from '../../shared/api/CarsI';
import { store } from '../../shared/api/store';
import { winners } from '../cars/base';
import { getCar } from '../cars/getCar';
import { WinnersItems } from '../winners/winners';
import { updateWinnersPage } from './updateWinnersPage';

interface Winners {
  id: string,
  car: CarsI,
  wins: number,
  time: number
}
function getSort(sort: string | null, order: string | null): string | undefined {
  if (sort && order) return `&_sort=${sort}&_order=${order}`;
  return '';
}
export async function getWinners(page: number, limit = 10, sort: string | null, order: string | null): Promise<void> {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSort(sort, order)}`);
  const winnersItem = await response.json();
  const winnersRes: Array<Winners> = await Promise.all(winnersItem.map(async(winner: Winners) => 
    ({...winner, car: await getCar(winner.id) })));
  const winnersPage = document.querySelector('.winners__page_int') as HTMLTextAreaElement;
  store.countWinners = Number(response.headers.get('X-Total-Count'));
  const totalCount = document.querySelector('.winners__count_int') as HTMLTextAreaElement;
  if (!totalCount) return;
  totalCount.textContent = String(store.countWinners);
  const main = document.querySelector('.winners_car-items');
  winnersRes.forEach((item, index) => {
    main?.append((new WinnersItems(index + 1, item.car.color, item.car.name, item.wins, item.time)).element)
  })
  updateWinnersPage();
  winnersPage.textContent = `${store.winnersPage}`;
}