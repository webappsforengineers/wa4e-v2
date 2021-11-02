import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement.js';

class headerTemplate extends StyledElement {
  constructor() {
    super();
    this.homePage = '/src/index.html';
  }

  static get properties() {
    return {
      // use .appConf in the HTML tag to send a configuration JS object to
      // configure the tile the `.` tells the webcomponents not to serialise or
      // stringify the object
      pageTitle: { type: String },
    };
  }

  render() {
    return [
      super.render(),
      html`
        <nav class="navbar navbar-expand-lg" style="background-color: #03a9f4">
          <div class="col-2">
            <a href="${this.homePage}"
              ><img
                class="img-fluid mx-auto d-block"
                src="/src/img/home.png"
                alt="Home"
            /></a>
          </div>
          <div class="col-6">
            <p class="h3 text-center text-wrap text-white">
              ${html([this.pageTitle])}
            </p>
          </div>
          <div class="col">
            <p class="h6 text-center text-white">Web Apps for Engineers</p>
          </div>
        </nav>
      `,
    ];
  }
}

customElements.define('header-element', headerTemplate);
