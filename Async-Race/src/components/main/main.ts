import { BaseComponent } from "../../shared/api/base-component";
import './main.scss';

export class Main extends BaseComponent {
  constructor() {
    super('main', ['main']);
    this.element.innerHTML = `
        <div class="container">
        
        </div>
    `
  }
}