import { html } from 'lit';
import { Plotly } from '../../../../wa4e-v2-maths/output/wa4e-math.js';
import { TileBase } from './tileBase';

class graphTile extends TileBase {
  render() {
    this.renderGraph();
    this.graphHtml = html` <div
      class="row row-cols-sm-1 row-cols-lg-2 row-cols-xxl-3"
    >
      ${Object.entries(this.appConf.plots).map(
        mapValue =>
          html`
            <div class="col">
              <div id=${mapValue[0]}></div>
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
