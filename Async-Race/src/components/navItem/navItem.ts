import { BaseComponent } from "../../shared/api/base-component";
import "./navItem.scss";

export class NavItem extends BaseComponent {
  constructor(navItem: string) {
    super('div', [`nav-${navItem}`]);
    this.element.innerHTML = `
      <button class="prev__${navItem}">
      <p class="prev__${navItem}_text">Prev</p>
      </button>
      <button class="next__${navItem}">
      <p class="next__${navItem}_text">Next</p>
      </button>
    `
  }
}