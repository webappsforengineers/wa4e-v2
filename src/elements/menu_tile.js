import { LitElement, html} from 'lit-element';
import { we4eStyles } from '../styles/we4e-styles.js';


class menuTile extends LitElement {
  static get styles() {
    return [
      we4eStyles,
    ]
  }


  static get properties() {
    return {
      appConf: {type: Object, attribute:false}
    };
  }

  constructor() {
    super();
    this.appConf = {};
  }

  render() {
    this.appPage = `/public/app_modules/${this.appConf.appName}/index.html`;
    this.appImg = `/public/img/${this.appConf.appName}.png`;
    this.appName = `${this.appConf.appName}`;
    this.appTitle = `${this.appConf.appTitle}`;
    this.appDescription = `${this.appConf.appDescription}`;
    return html`
        <a href=${this.appPage}>
        <div class='main-menu-card'>
          <div>
            <img class="centred main-menu-figure" src=${this.appImg} alt="${this.appName} icon" />
          </div>
          <div class="main-menu-card-title">${this.appTitle}</div>
          <div class="main-menu-card-description">${this.appDescription}</div>
        </div>
        </a>
    `;
  }

}

customElements.define('menu-tile', menuTile);
