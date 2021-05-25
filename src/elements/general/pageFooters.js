import { html, LitElement } from 'lit';
import {we4eStyles} from '../../styles/we4eStyles.js';

class footerTemplate extends LitElement {
  static get styles() {
    return [
      we4eStyles,
    ]
  }

  constructor() {
    super();
    this.contactEmail = `susan.gourvenec@southampton.ac.uk`;
    this.contactEmailLink = this.contactEmail.link(`mailto:${this.contactEmail}`);
    this.footerText = `The author shall not be liable for any direct, ` +
      `consequential or incidental damages arising out of the use of this ` +
      `program. The entire risk as to the quality, performance and ` +
      `application of the program lies with the user. This page was ` +
      `established and is maintained by Professor Susan Gourvenec, ` +
      `University of Southampton, as a teaching tool ` +
      `and to assist research dissemination.`;
  }

  render() {
    return html`
      <hr class='width-constrained' id='footer-hr' />
      <footer class='footer footer-text'>
        <p>
          ${this.footerText}
          <a href=${this.contactEmailLink}>${this.contactEmail}</a>
        </p>
      </footer>
    `;
  }
}

customElements.define('footer-element', footerTemplate);
