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
        <nav class="navbar navbar-expand-lg bg-info">
          <div class="col-2">
            <a href="${this.homePage}"
              ><img
                class="img-fluid mx-auto d-block bg-info"
                src="/public/img/home.png"
                alt="Home"
            /></a>
          </div>
          <div class="col-6">
            <p class="h3 text-center text-wrap">
              ${this.getAttribute('page-title')}
            </p>
          </div>
          <div class="col">
            <p class="h3 text-center">Web Apps for Engineers</p>
          </div>
        </nav>
      `,
    ];
  }
}

customElements.define('header-element', headerTemplate);
