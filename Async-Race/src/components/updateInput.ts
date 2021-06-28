import { store } from "../shared/api/store";

export function updateInput(): void {
  const inputUpdate = document.querySelector('.input__update') as HTMLInputElement;
  const colorInputUpdate = document.querySelector('#input__color-update') as HTMLInputElement; 
  const inputCreate = document.querySelector('#input__create') as HTMLInputElement;
  const colorInputCreate = document.querySelector('#input__color-create') as HTMLInputElement;
  inputUpdate?.addEventListener('input', () => {
    store.storeInputUpdate = inputUpdate?.value;
  })
    
  colorInputUpdate?.addEventListener('input', () => {
    store.storeColorUpdate = colorInputUpdate.value;
  }, false)

  inputCreate?.addEventListener('input', () => {
    store.storeInputCreate = inputCreate.value;
  })

  colorInputCreate?.addEventListener('input', () => {
    store.storeColorCreate = colorInputCreate.value;
  })
}