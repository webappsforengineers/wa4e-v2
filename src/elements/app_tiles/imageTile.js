import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement';

class imageTile extends StyledElement {
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
    return [
      super.render(),
      html`
        <img
          class="caisson-figure"
          src=${this.appConf.img_pth}
          alt="caisson diagrams"
        />
      `,
    ];
  }
}

customElements.define('image-tile', imageTile);
