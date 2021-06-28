import { BaseComponent } from "../../shared/api/base-component";
import './header.scss';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);
    this.element.innerHTML = `
        <div class="container">
            <nav>
                <ul class="header__nav">
                    <li>
                        <a class="header__items" href="#garage">
                            <p class="header__text">To Garage</p>
                        </a>
                    </li>
                    <li>
                        <a class="header__items" href="#winners">
                            <p class="header__text">To Winners</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    `
  }
}