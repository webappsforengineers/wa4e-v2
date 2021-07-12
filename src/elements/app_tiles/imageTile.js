import { LitElement, html } from 'lit';
import { we4eGrids, we4eStyles, dimensions } from '../../styles/we4eStyles.js';

class imageTile extends LitElement {
  // Get the styles
  static get styles() {
    return [we4eStyles, we4eGrids];
  }

  // define the JS object and/or html attributes to be passed to the app
  static get properties() {
    return {
      // use .appConf in the HTML tag to send a configuration JS object to
      // configure the tile the `.` tells the webcomponents not to serialise or
      // stringify the object
      appConf: { type: Object },
    };
  }

  render() {
    return html`
      <img class="caisson-figure" src=${this.appConf.img_pth} alt="caisson diagrams" />
    `;
  }
}

customElements.define('image-tile', imageTile);
