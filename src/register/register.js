import { html } from 'lit';
import { StyledElement } from '../styles/wa4eStyleElement.mjs';
import '../elements/myElements.mjs';

export class registerPage extends StyledElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = '';
  }

  render() {
    return [
      super.render(),
      html`
        <div style="background-color: #00557f; height: auto; min-height: 100vh">
          <div class="row">
            <header-element page-title="${this.title}"></header-element>
          </div>
          <div
            class="container align-items-center justify-content-center"
            style="align-items: center; justify-content: center"
          >
            <registration-form></registration-form>

            <div>
              <footer-light-element></footer-light-element>
            </div>
          </div>
        </div>
      `,
    ];
  }
}

customElements.define('register-page', registerPage);
