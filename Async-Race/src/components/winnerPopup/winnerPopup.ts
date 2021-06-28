import { BaseComponent } from "../../shared/api/base-component";
import './winnerPopup.scss';

export class WinnersForm extends BaseComponent {
  constructor(name: string | undefined, time: number | undefined) {
    super('div', ['winners__popup']);
    this.element.innerHTML = `
        <div class="winners__body">
         <div class="winners__content">
            <p class="winners__text-popup">${name} went first (${time}s)!</p>
            <button class="button__remove-popup">
               OK
            </button>
         </div>
        </div>
    `
  }
}