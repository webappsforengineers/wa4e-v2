import { html } from 'lit';
import { TileBase } from './tileBase.mjs';

class downloadOutput extends TileBase {
  constructor() {
    super();
    this.inputLength = null;
  }

  render() {
    return [
      super.render(),
      html`
        <h3>Download Output Data</h3>
        <h4>Download a CSV file of Output Data</h4>
        <button
          class="btn mb-3"
          style="background-color: #c1d100; color: #00557f"
        >
          Download
        </button>

        <h4>Output Data Preview</h4>
        <table class="table table-bordered mt-3">
          <thead>
            <tr>
              <th scope="col">Strain</th>
              <th scope="col">G/G0</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>...</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      `,
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  runCalc() {
    window.console.log('upload data');
  }
}

customElements.define('download-output', downloadOutput);
