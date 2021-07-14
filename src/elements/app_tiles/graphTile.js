import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement';
import { Plotly } from '../../../../wa4e-v2-maths/output/wa4e-math.js';

class graphTile extends StyledElement {
  // define the JS object and/or html attributes to be passed to the app
  static get properties() {
    return {
      // use .appConf in the HTML tag to send a configuration JS object to
      // configure the tile the `.` tells the webcomponents not to serialise or
      // stringify the object
      appConf: { type: Object },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('update-children', () => this.requestUpdate());
  }

  disconnectedCallback() {
    window.removeEventListener('update-children', () => this.requestUpdate());
    super.disconnectedCallback();
  }

  render() {
    this.renderGraph();
    this.graphHtml = html` <div class="sub-grid-container">
      ${Object.entries(this.appConf.plots).map(
        mapValue =>
          html`
            <div
              class="grid-item"
              style="--xstart: ${mapValue[1].subGridPosition.xStart};
                 --ystart: ${mapValue[1].subGridPosition.yStart};
                 --xend: ${mapValue[1].subGridPosition.xEnd};
                 --yend: ${mapValue[1].subGridPosition.yEnd};"
            >
              <div class="app-card">
                <div
                  id=${mapValue[0]}
                  class="centred"
                  style="width: 450px; height: 450px;"
                ></div>
              </div>
            </div>
          `
      )}
    </div>`;
    return [super.render(), this.graphHtml];
  }

  async renderGraph() {
    await this.updateComplete;
    Object.entries(this.appConf.plots).map(mapValue =>
      Plotly.newPlot(
        this.renderRoot.querySelector(`#${mapValue[0]}`),
        mapValue[1].dataFun(
          Object.entries(mapValue[1].args).map(
            varName => this.appConf.fields[varName[1]]
          )
        ),
        mapValue[1].layout
      )
    );
  }
}

customElements.define('graph-tile', graphTile);
