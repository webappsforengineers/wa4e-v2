import { LitElement, html} from 'lit-element';
import { we4eStyles } from '../styles/we4e-styles.js';

class menuTile extends LitElement {
  static get styles() {
    return [
      we4eStyles,
    ]
  }

  constructor() {
    super();
    this.appName = this.getAttribute('app-name')
    this.appPage = `/public/app_modules/${this.appName}.html`
  }

  render() {
    return html`
      <div class='container'>
        <div class='main-menu-card-container' onclick=this.goToApp()>
          <div>
            <img class="centred main-menu-figure" src="img/ncv.png" alt="ncv icon" />
          </div>
        </div>
      </div>
    `;
  }

  goToApp() {
    window.location.replace(this.appPage)
  }

}

customElements.define('menu-tile', menuTile);
