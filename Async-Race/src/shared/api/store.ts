type CallbackFunction = () => Promise<void>;
interface AnimationId {
  end?: boolean | undefined,
  stopped?: boolean | undefined
  id?: number | undefined,
  distance?: number 
}
interface Animation {
  [key: string]: AnimationId;
}
interface StoreI {
  page: number,
  countCars: number,
  updateCar: boolean,
  storeUpdateItem: undefined | CallbackFunction,
  storeInputUpdate: string,
  storeColorUpdate: string,
  storeInputCreate: string,
  storeColorCreate: string,
  animation: Animation,
  isEngineStarted: boolean,
  isRace: boolean,
  sort: null | string,
  sortOrder: null | string,
  countWinners: number,
  isActive: boolean,
  winnersPage: number
}
export const store: StoreI = {
  page: 1,
  winnersPage: 1,
  countCars: 4,
  updateCar: false,
  storeUpdateItem: undefined,
  storeInputUpdate: '',
  storeColorUpdate: '',
  storeInputCreate: '',
  storeColorCreate: '#0000FF',
  animation: {},
  isEngineStarted: false,
  isRace: false,
  sort: 'time',
  sortOrder: 'asc',
  countWinners: 4,
  isActive: false,
}