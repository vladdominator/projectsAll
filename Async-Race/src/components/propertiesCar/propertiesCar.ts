import { BaseComponent } from "../../shared/api/base-component";

export class PropetiesCar extends BaseComponent {
  constructor() {
    super();
    this.element.innerHTML = `
          <div class="winners__properties">
            <p>Number</p>
            <p>Car</p>
            <p>Name</p>
            <div class="wins__property">
              <p>Wins</p>
              <p class="wins disable">&#129045;</p>
            </div>
            <div class="time__property">
              <p>Best time (seconds)</p>
              <p class="time">&#129045;</p>
            </div>
         </div>
    `
  }
}