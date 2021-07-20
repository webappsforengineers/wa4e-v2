import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement';

class footerTemplate extends StyledElement {
  constructor() {
    super();
    this.contactEmail = `susan.gourvenec@southampton.ac.uk`;
    this.contactEmailLink = this.contactEmail.link(
      `mailto:${this.contactEmail}`
    );
    this.footerText =
      `The author shall not be liable for any direct, ` +
      `consequential or incidental damages arising out of the use of this ` +
      `program. The entire risk as to the quality, performance and ` +
      `application of the program lies with the user. This page was ` +
      `established and is maintained by Professor Susan Gourvenec, ` +
      `University of Southampton, as a teaching tool ` +
      `and to assist research dissemination.`;
  }

  render() {
    return [
      super.render(),
      html`
        <hr class="width-constrained" id="footer-hr" />
        <div class='container'>
        <footer class="footer footer-text">
          <span>
            ${this.footerText}
            <a href=${this.contactEmailLink}>${this.contactEmail}</a>
          </span>
        </footer>
        </div>
      `,
    ];
  }
}

customElements.define('footer-element', footerTemplate);
