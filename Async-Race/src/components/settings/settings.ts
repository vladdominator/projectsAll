import { BaseComponent } from "../../shared/api/base-component";
import './settings.scss';

export class Settings extends BaseComponent {
  constructor() {
    super();
    this.element.innerHTML = `
    <div class="settings">
        <div class="create__cars">
            <input type="text" class="input__text" id="input__create">
            <input type="color" value="#0000FF" class="input__color" id="input__color-create">
            <button class="button__create" id="button__create_car">Create</button>
        </div>
        <div class="update__cars">
            <input type="text" class="input__update" id="input__update">
            <input type="color" value="#ffffff" class="input__color-update" id="input__color-update">
            <button class="button__update" id="button__update_car">Update</button>
        </div>
        <div class="settings__start">
            <button class="settings__race">
                Race
            </button>
            <button class="reset__race" id="reset__cars">
                Reset
            </button>
            <button class="generate__cars">
                generate cars
            </button>
        </div>
    </div>
    `
  }
}