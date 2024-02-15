import { html } from 'lit';
import { TileBase } from '../tileBase.mjs';
import { Plotly } from '../../../local_modules/wa4e-math.js';

class plotOutputVsTarget extends TileBase {
  static get properties() {
    return {
      outputs: {},
      targets: {},
    };
  }

  constructor() {
    super();
    this.outputs = [];
    this.targets = [];
  }

  render() {
    window.onload = this.plotOutputsVsTargets();
    return [super.render(), html` <div id="TargetVsOutputPlot2"></div> `];
  }

  async plotOutputsVsTargets() {
    await this.updateComplete;

    // this.targets = localStorage.getItem('targets').split(',');
    // this.outputs = localStorage.getItem('outputs').split(',');

    // this.targets = this.targets.split(',')

    // window.console.log(typeof(this.targets))
    // window.console.log(this.targets)

    const targetOutputData = [
      {
        x: this.targets,
        y: this.outputs,
        mode: 'markers',
        type: 'scatter',
      },
    ];

    const targetOutputLayout = { title: 'Outputs vs Target G/G0 values' };

    Plotly.newPlot(
      'TargetVsOutputPlot2',
      targetOutputData,
      targetOutputLayout,
      {
        showLink: true,
        plotlyServerURL: 'https://chart-studio.plotly.com',
        linkText: 'Play with this data',
      }
    );
  }
}

customElements.define('plot-output-vs-target', plotOutputVsTarget);
