import { BaseComponent } from "../../shared/api/base-component";
import './winners.scss';

export class Winners extends BaseComponent {
  constructor() {
    super('div', ['winners']);
    this.element.innerHTML = `
         <div class="winners__count">
            <span class="winners__count_text">
            winners
            </span>
            <span class="winners-closely">-</span>
            <span class="winners__count_int"></span>
         </div>
         <div class="winners__page">
            <span class="winners__page_text">
               Page
            </span>
            <span class="winners__page_brace">
            #
            </span>
            <span class="winners__page_int">1</span>
         </div>
    `
  }
}