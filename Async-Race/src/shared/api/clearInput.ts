export function clearInput(inputValue: HTMLInputElement, inputValueColor: HTMLInputElement): void {
  inputValue.value = '';
  if (inputValueColor.id === 'input__color-update') inputValueColor.value = '#ffffff';
  else inputValueColor.value = '#0000FF';
}