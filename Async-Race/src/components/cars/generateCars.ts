import { garage } from "./base";
import { deletePage } from "./deletePage";

const models = ['Tesla', 'Mersedes', 'BMW', 'Toyota', 'Zhiguli', 'Moskvich', 'Opel', 'Aston Martin', 'Porshe'];
const names = ['Model S', 'CLK', '7', 'Camry', 'Combi', '9', 'Corsa', 'Cayene', '10'];
function getRandomName(): string {
  const model = models[Math.floor(Math.random() * models.length)];
  const name = names[Math.floor(Math.random() * models.length)];
  return `${model} ${name}`;
}
function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
async function addCars(): Promise<void> {
  const body = {
    "name": getRandomName(),
    "color": getRandomColor(),
  };
  (await fetch(garage, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })).json();
}
export function generateCars(): void {
  const buttonGenerate = document.querySelector('.generate__cars');
  buttonGenerate?.addEventListener('click', async() => {
    for(let i = 0; i < 100; i++) {
		  addCars();
	  }
	  deletePage();
  })
}