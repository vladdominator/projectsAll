import { createCar } from "../../components/cars/createCar";
import { getCars } from "../../components/cars/apiCars";
import { nextGarage } from "../../components/garage/nextGarage";
import { store } from "./store";
import { generateCars } from "../../components/cars/generateCars";
import { updateInput } from "../../components/updateInput";
import { eventPage } from "../../components/cars/eventPage";
import { raceClick } from "../../components/cars/raceClick";
import { resetClick } from "../../components/cars/resetClick";
import { getWinners } from "../../components/winnersPage/getWinners";
import { nextWinners } from "../../components/winnersPage/nextWinners";
import { eventWinnersPage } from "../../components/winnersPage/eventWinnersPage";
import { changeSort } from "../../components/winnersPage/changeSort";

export async function api(): Promise<void> {
  getCars(store.page, 7);
  getWinners(store.winnersPage, 10, store.sort, store.sortOrder);
  createCar();
  nextGarage();
  nextWinners();
  eventPage();
  eventWinnersPage();
  changeSort();
  generateCars();
  updateInput();
  raceClick();
  resetClick();
}