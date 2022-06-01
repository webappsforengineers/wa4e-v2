import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { StyledElement } from '../../styles/wa4eStyleElement.mjs';

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
          class="card w-auto text-center text-wrap justify-content-center align-items-center p-3"
          style="background-color: ${this.appConf
            .appColour}; aspect-ratio: 0.8;"
        >
          <img
            src=${this.appImg}
            class="card-img-top img-fluid"
            style="width: 90%; height: 150px; object-fit: scale-down;"
            alt="${this.appConf.appName} icon"
          />
          <div class="card-body">
            <h6 class="card-title">${unsafeHTML(this.appConf.appTitle)}</h6>
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
