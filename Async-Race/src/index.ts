import { App } from "./app";
import { deleteCar } from "./components/cars/deleteCar";
import { updateCar } from "./components/cars/updateCar";
import { api } from "./shared/api/api";
import './style.scss';
import './zeroing.scss';

window.addEventListener('load', async() => {
  const appElement:HTMLElement = document.body;
  if (!appElement) throw Error('No body in html document.');
  const app = new App(appElement);
  app.init();
  await app.initRouting();
  await api();
  document.addEventListener('click', (e) =>{
    deleteCar(e);
    updateCar(e);
  });
});