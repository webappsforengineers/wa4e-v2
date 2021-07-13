import {  html } from 'lit';
import {StyledElement} from '../../styles/wa4eStyleElement';
import { we4eGrids, we4eStyles, dimensions } from '../../styles/wa4eStyleElement.js';

class exampleTile extends StyledElement {
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

  constructor() {
    super();
    // add more stuff or delete this
    this.notused = {};
  }

  render() {
    return html`
      <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
      <div
        class="grid-item app-card"
        style="--xstart:${this.appConf.gridPosition.xStart};
                  --ystart:${this.appConf.gridPosition.yStart};
                  --xend:${this.appConf.gridPosition.xEnd};
                  --yend:${this.appConf.gridPosition.yEnd};"
      >
        <!-- Here are the forms attributes -->
        <p>Hello World</p>
      </div>
    `;
  }
}

customElements.define('example-tile', exampleTile);
