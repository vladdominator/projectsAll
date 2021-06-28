import { BaseComponent } from "../../shared/api/base-component";
import './garage.scss';

export class Garage extends BaseComponent {
  constructor() {
    super();
    this.element.innerHTML = `
    <div class="garage-source">
        <span class="garage-source__text">garage</span>
        <span class="open__garage">-</span>
        <span class="garage-source__number"></span>
        <div class="number__page">
            <span class="page__text">Page</span>
            <span class="page__number"></span>
        </div>
    </div>
    `
  }
}