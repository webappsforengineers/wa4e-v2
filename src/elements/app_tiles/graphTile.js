import { LitElement, html } from 'lit';
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
    this.graphTiles = html`${Object.entries(this.appConf.plots).map(value =>
      this.makeGraphs(value)
    )}`;
    return html`
      <script src="https://cdn.plot.ly/plotly-2.2.1.min.js"></script>
      <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
      ${this.graphTiles}
    `;
  }

  makeGraphs(value) {
    console.log(value);
    console.log(
      Object.entries(value[1].args).map(
        varName => this.appConf.graphData[varName[1]]
      )
    );
    return html`
      <div
        class="grid-item app-card"
        style="--xstart:${value[1].gridPosition.xStart};
                 --ystart:${value[1].gridPosition.yStart};
                 --xend:${value[1].gridPosition.xEnd};
                 --yend:${value[1].gridPosition.yEnd};"
      >
        <div
          id="${value[0]}"
          class="centred"
          style="width: 450px; height: 450px;"
        ></div>
        <script>
          Plotly.newPlot("${value[0]}", value.dataFun(Object.entries(value[1].args).map((varName) => this.appConf.graphData[varName[1]]))
        </script>
      </div>
    `;
  }
}

customElements.define('graph-tile', graphTile);
