import { clearInput } from "../../shared/api/clearInput";
import { store } from "../../shared/api/store";
import { garage } from "./base";
import { deletePage } from "./deletePage";

export async function createCar(): Promise<void> {
  const buttonCreate = document.querySelector('#button__create_car');
  buttonCreate?.addEventListener('click', async() => {
    const inputCreateValue = (document.querySelector('#input__create') as HTMLInputElement).value;
    const inputColorValue = (document.querySelector('#input__color-create') as HTMLInputElement).value;
    if (inputCreateValue.trim().length === 0 || inputColorValue === '#000000') {
      return;
    }
    const body = {
      "name": inputCreateValue,
      "color": inputColorValue,
    };
    (await fetch(garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })).json();
    await clearInput(document.querySelector('#input__create') as HTMLInputElement, 
      document.querySelector('#input__color-create') as HTMLInputElement);
    await deletePage();
    store.storeColorCreate = '#0000FF';
    store.storeInputCreate = '';
  })
}