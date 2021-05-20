import { LitElement, html} from 'lit-element';
import { we4eGrids, we4eStyles } from '../../styles/we4e-styles.js';

class inputTile extends LitElement {
  // Get the styles
  static get styles() {
    return [
      we4eStyles,
      we4eGrids
    ]
  }

  // define the JS object and/or html attributes to be passed to the app
  static get properties() {
    return {
      // use .appConf in the HTML tag to send a configuration JS object to
      // configure the tile the `.` tells the webcomponents not to serialise or
      // stringify the object
      appConf: { type: Object, attribute: false }
    };
  }

  constructor() {
    super();
    this.appConf = {};
    }

  render() {
    return html`
      <div class='grid-item'
           style='--xstart:${this.appConf.gridPosition.xStart};
                  --ystart:${this.appConf.gridPosition.yStart};
                  --xend:${this.appConf.gridPosition.xEnd};
                  --yend:${this.appConf.gridPosition.yEnd};'
      >
        <p>Hello World</p>
      </div>

    `;
  }

}

customElements.define('input-tile', inputTile);
