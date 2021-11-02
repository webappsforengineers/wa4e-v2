import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement.js';

class menuTile extends StyledElement {
  // define the JS object and/or html attributes to be passed to the app
  static get properties() {
    return {
      // use .appConf in the HTML tag to send a configuration JS object to
      // configure the tile the `.` tells the webcomponents not to serialise or
      // stringify the object
      appConf: { type: Object, attribute: false },
    };
  }

  constructor() {
    super();
    this.appConf = {};
  }

  /* eslint-disable lit-a11y/anchor-has-content */
  render() {
    // create static data paths
    this.appPage = `./app_modules/${this.appConf.appName}/index.html`;
    this.appImg = `./img/${this.appConf.appName}.png`;
    return [
      super.render(),
      html`
        <div
          class="card text-center text-wrap align-items-center p-3"
          style="height: 325px; width: 325px; background-color: ${this.appConf
            .appColour}"
        >
          <img
            class="card-img-top"
            style="max-width: 150px; max-height: 150px;"
            src=${this.appImg}
            alt="${this.appConf.appName} icon"
          />
          <div class="card-body">
            <h5 class="card-title">${html([this.appConf.appTitle])}</h5>
            <p class="card-text">${this.appConf.appDescription}</p>
            <a href=${this.appPage} class="stretched-link"></a>
          </div>
        </div>
      `,
    ];
  }
  /* eslint-enable lit-a11y/anchor-has-content */
}

customElements.define('menu-tile', menuTile);
