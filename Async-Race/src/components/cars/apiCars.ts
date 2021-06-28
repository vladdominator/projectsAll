import { CarsI } from '../../shared/api/CarsI';
import { store } from '../../shared/api/store';
import { updateGarage } from '../garage/updateGarage';
import { garage } from './base';
import { Cars } from './cars';
import { removeEngine } from './removeEngine';
import { addEngine } from './startEngine';

export async function getCars(page: number, limit: number): Promise<void> {
  const main = document.querySelector('.garage');
  const res = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const totalCount = document.querySelector('.garage-source__number') as HTMLTextAreaElement;
  const pageNumber = document.querySelector('.page__number') as HTMLTextAreaElement;
  const response = await res.json();
  response.forEach(async(element: CarsI) => {
    main?.append((new Cars(element.color, element.name, element.id)).element);
  });
  const total = await res.headers.get('X-Total-Count');
  if (totalCount) totalCount.textContent = await total;
  store.countCars = await Number(total);
  await updateGarage();
  if (pageNumber) pageNumber.textContent = await `#${store.page}`;
  addEngine();
  removeEngine();
} 
