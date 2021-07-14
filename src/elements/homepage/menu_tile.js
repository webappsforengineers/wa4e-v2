import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement';

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

  render() {
    // create static data paths
    this.appPage = `/public/app_modules/${this.appConf.appName}/index.html`;
    this.appImg = `/public/img/${this.appConf.appName}.png`;
    return [
      super.render(),
      html`
        <div class="container">
          <a href=${this.appPage}>
            <figure class="figure">
              <img
                class="figure-img img-fluid mx-auto d-block"
                style="max-width: 200px;"
                src=${this.appImg}
                alt="${this.appConf.appName} icon"
              />
              <figcaption
                class="figure-caption text-center fs-4 fw-bold text-wrap"
              >
                ${this.appConf.appTitle}
              </figcaption>
              <figcaption
                class="figure-caption text-center fs-6 text-wrap bottom-50"
              >
                ${this.appConf.appDescription}
              </figcaption>
            </figure>
          </a>
        </div>
      `,
    ];
  }
}

customElements.define('menu-tile', menuTile);
