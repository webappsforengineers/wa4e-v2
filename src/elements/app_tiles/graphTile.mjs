import { html } from 'lit';
import { Plotly } from '../../local_modules/wa4e-math.js';
import { TileBase } from './tileBase.mjs';

class graphTile extends TileBase {
  // extend the properties class
  static get properties() {
    const newProperties = {
      plotKey: { type: String },
    };
    return Object.assign(newProperties, super.properties);
  }

  render() {
    if (this.hasUpdated) {
      this.configGraph();
    }
    this.graphHtml = html`<div
      class="responsive-plot"
      id=${this.plotKey}
    ></div>`;
    return [super.render(), this.graphHtml];
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.renderGraph();
  }

  async renderGraph() {
    await this.updateComplete;
    Plotly.newPlot(
      document.getElementById(this.plotKey),
      null,
      this.appConf.plots[this.plotKey].layout
    );
  }

  async configGraph() {
    await this.updateComplete;
    await this.updateGraph();
    this.appConf.updateConf.noNewData = false;
    this.appConf.updateConf.clearData = false;
  }

  async updateGraph() {
    if (this.appConf.updateConf.clearData) {
      this.appConf.plots[this.plotKey].data = [];
    }
    if (this.appConf.updateConf.noNewData) {
      // do nothing
    } else if (this.appConf.plots[this.plotKey].addLines) {
      this.appConf.plots[this.plotKey].data = this.appConf.plots[
        this.plotKey
      ].data.concat(
        this.appConf.plots[this.plotKey].dataFun.apply(
          this,
          Object.entries(this.appConf.plots[this.plotKey].args).map(
            varName => this.appConf.fields[varName[1]]
          )
        )
      );
    } else {
      this.appConf.plots[this.plotKey].data = this.appConf.plots[
        this.plotKey
      ].dataFun.apply(
        this,
        Object.entries(this.appConf.plots[this.plotKey].args).map(
          varName => this.appConf.fields[varName[1]]
        )
      );
    }
    Plotly.react(
      document.getElementById(this.plotKey),
      this.appConf.plots[this.plotKey].data,
      this.appConf.plots[this.plotKey].layout
    );
  }
}

customElements.define('graph-tile', graphTile);
