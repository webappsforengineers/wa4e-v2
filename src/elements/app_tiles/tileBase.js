import { StyledElement } from '../../styles/wa4eStyleElement';

// This defines the base class to build the app-tiles
export class TileBase extends StyledElement {
  // define the JS object appConf to be passed to the tile from the app
  static get properties() {
    return {
      // use .appConf in the HTML tag to send a configuration JS object to
      // configure the tile the `.` tells the webcomponents not to serialise or
      // stringify the object
      appConf: { type: Object },
    };
  }

  // Add and destroy callbacks so components rerender on at the parent app request
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('update-children', () => this.requestUpdate());
  }

  disconnectedCallback() {
    window.removeEventListener('update-children', () => this.requestUpdate());
    super.disconnectedCallback();
  }

  updated(_changedProperties) {
    super.updated(_changedProperties);
    this.tileLoaded();
  }

  async tileLoaded() {
    const myEvent = new CustomEvent('loaded', {
      bubbles: true,
      composed: true,
    });
    await this.updateComplete;
    this.dispatchEvent(myEvent);
  }
}
