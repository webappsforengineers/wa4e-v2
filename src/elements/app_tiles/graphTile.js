import { html } from 'lit';
import { Plotly } from '../../local_modules/wa4e-math.js';
import { TileBase } from './tileBase';

class graphTile extends TileBase {
  render() {
    if (this.hasUpdated) {
      this.updateGraph();
    }
    this.graphHtml = html` <div
      class="row row-cols-sm-1 row-cols-lg-2 row-cols-xxl-3 gy-4"
    >
      ${Object.entries(this.appConf.plots).map(
        mapValue =>
          html`
            <div class="card mx-auto" style='min-width: 450px'>
              <div class="responsive-plot" id=${mapValue[0]}></div>
            </div>
          `
      )}
    </div>`;
    return [super.render(), this.graphHtml];
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.renderGraph();
  }

  async renderGraph() {
    await this.updateComplete;
    Object.entries(this.appConf.plots).map(mapValue =>
      Plotly.newPlot(
        document.getElementById(mapValue[0]),
        null,
        mapValue[1].layout
      )
    );
  }

  async updateGraph() {
    await this.updateComplete;
    Object.entries(this.appConf.plots).map(mapValue =>
      Plotly.react(
        document.getElementById(mapValue[0]),
        mapValue[1].dataFun.apply(
          this,
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
