import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement';

class headerTemplate extends StyledElement {
  constructor() {
    super();
    this.homePage = '/public/index.html';
  }

  render() {
    return [
      super.render(),
      html`
        <nav class="navbar navbar-expand-lg" style='background-color: #03a9f4'>
          <div class="col-2">
            <a href="${this.homePage}"
              ><img
                class="img-fluid mx-auto d-block"
                src="/public/img/home.png"
                alt="Home"
            /></a>
          </div>
          <div class="col-6">
            <p class="h3 text-center text-wrap text-white">
              ${this.getAttribute('page-title')}
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
