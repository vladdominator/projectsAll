import { Garage } from "./components/garage/garage";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { PropetiesCar } from "./components/propertiesCar/propertiesCar";
import { Settings } from "./components/settings/settings";
import { storeUpdate } from "./components/storeUpdate";
import { Winners } from "./components/winnersPage/winners";
import { api } from "./shared/api/api";

const errorStyles = `style="color: red; text-align: center; font-size: 50px; font-weight: 600";`;
const errorResponse =`<p ${errorStyles}>Error 404</p>`;
interface Page {
  page: string | null;
}
export class App {
  private header: Header;

  private main: Main;

  private settings: Settings;

  private garage: Garage;

  private winners: Winners;

  private propetiesCar: PropetiesCar;
  
  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.main = new Main();
    this.settings = new Settings();
    this.garage = new Garage();
    this.winners = new Winners();
    this.propetiesCar = new PropetiesCar();
  }

  public init(): void {
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.main.element);
    this.initGarage();
  }

  public initRouting(): void {
    const location = { page: window.location.hash };
    if (location) {
      this.updateState(location);
    }
    const navItems = document.querySelectorAll('.header__items');
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        const state = { page: item.getAttribute('href')}
        this.checkPage(state);
      })
    })
    this.initState();
  }

  public initGarage(): void {
    this.main.element.innerHTML = `
    <div class = "container">
      ${this.settings.element.innerHTML}
      ${this.garage.element.innerHTML}
      <div class="garage"></div>
    </div>
    `;
  }

  public initWinners(): void {
    this.main.element.innerHTML = `
    <div class="winners">
      <div class="container__winners">
        ${this.winners.element.innerHTML}
        ${this.propetiesCar.element.innerHTML}
        <div class="winners_car-items"></div>
      </div>
    </div>
    `;
  }

  public initState(): void { 
    window.addEventListener('popstate', async() => {
      const state = { page: window.location.hash };
      this.checkPage(state);
      await api();
      await storeUpdate();
    })
  }
  
  public updateState(state: Page): void {
    this.checkPage(state);
  }

  public checkPage (state: Page | null): void {
    if (state && state.page) {
      if (state.page === '#garage') {
        this.initGarage();
      } else if (state.page === '#winners') {
        this.initWinners();
      } else {
        this.main.element.innerHTML = `${errorResponse}`;
      }
    }
  }
}
