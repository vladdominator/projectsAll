interface State {
  id?: number,
  end?: boolean,
  distance?: number,
  stopped?: boolean
}
let cars: HTMLElement;
export function animation(car: HTMLElement, distance: number, animationTime: number): State {
  let start: null | number = null;
  const state: State = {};
  function step(timeStep: number) { 
    const itemsCar = document.querySelectorAll('.car__item');
    itemsCar.forEach((item) => {
      if (item.id === car.parentElement?.parentElement?.parentElement?.id) {
        cars = item.querySelector('.car__image') as HTMLElement;
      }
    })
    if (!start) start = timeStep;
    const time = timeStep - start;
    const passed = Math.round(time * (distance / animationTime));
    cars.style.transform = `translate(${Math.min(passed, distance)}px)`; 
    state.distance = passed;        
    if (passed < distance) {
      state.id = window.requestAnimationFrame(step);
    } else state.end = true;
  }
  state.end = false;
  state.id = window.requestAnimationFrame(step);
  return state;
}