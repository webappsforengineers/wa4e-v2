import { html } from 'lit';
import { Plotly } from '../../local_modules/wa4e-math.js';
import { TileBase } from './tileBase';

class graphTile extends TileBase {
  render() {
    if (this.hasUpdated) {
      this.configGraph();
    }
    this.graphHtml = html` <div
      class="row row-cols-sm-1 row-cols-lg-2 row-cols-xxl-3 gy-4"
    >
      ${Object.entries(this.appConf.plots).map(
        mapValue =>
          html`
            <div class="card mx-auto" style="min-width: 450px">
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

  async configGraph() {
    await this.updateComplete;
    Object.entries(this.appConf.plots).map(mapValue =>
      this.updateGraph(mapValue)
    );
    this.appConf.updateConf.noNewData = false;
    this.appConf.updateConf.clearData = false;
  }

  async updateGraph(mapValue) {
    if (this.appConf.updateConf.clearData) {
      this.appConf.plots[mapValue[0]].data = [0];
    }
    if (this.appConf.updateConf.noNewData) {
      // do nothing
    } else if (mapValue[1].addLines) {
      this.appConf.plots[mapValue[0]].data = this.appConf.plots[
        mapValue[0]
      ].data.concat(
        mapValue[1].dataFun.apply(
          this,
          Object.entries(mapValue[1].args).map(
            varName => this.appConf.fields[varName[1]]
          )
        )
      );
    } else {
      this.appConf.plots[mapValue[0]].data = mapValue[1].dataFun.apply(
        this,
        Object.entries(mapValue[1].args).map(
          varName => this.appConf.fields[varName[1]]
        )
      );
    }
    Plotly.react(
      document.getElementById(mapValue[0]),
      this.appConf.plots[mapValue[0]].data,
      this.appConf.plots[mapValue[0]].layout
    );
  }
}

customElements.define('graph-tile', graphTile);
