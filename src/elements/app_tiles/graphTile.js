import { LitElement, html } from 'lit';
// import Plotly from 'plotly.js-dist'
import { we4eGrids, we4eStyles } from '../../styles/we4eStyles.js';

class graphTile extends LitElement {
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
    this.graphTiles = this.makeGraphs();
    return html`
      <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
      ${this.graphTiles}
    `;
  }

  makeGraphs() {
    let htmlTemp = html``;
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(this.appConf.plots)) {
      htmlTemp += html` <div
        class="grid-item app-card"
        style="--xstart:${value.gridPosition.xStart};
               --ystart:${value.gridPosition.yStart};
               --xend:${value.gridPosition.xEnd};
               --yend:${value.gridPosition.yEnd};"
      >
        <div
          id=${key}
          class="centred"
          style="width: 450px; height: 450px;"
        ></div>
      </div>`;

      // Plotly.newPlot(document.getElementById(key), value.dataFun(this.appConf.graphData[value.args]))
    }
    return htmlTemp;
  }
}

customElements.define('graph-tile', graphTile);
