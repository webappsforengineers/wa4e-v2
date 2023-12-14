import { html } from 'lit';
import { TileBase } from './tileBase.mjs';

class neuralNetworkSettings extends TileBase {
  constructor() {
    super();
    this.inputLength = null;
  }

  render() {
    return [
      super.render(),
      html`
        <h3>Neural Network Settings</h3>
        <h4>Training Algorithm</h4>
        <div class="mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="lavenberg-marquardt"
            />
            <label class="form-check-label" for="lavenberg-marquardt">
              Lavenberg-Marquardt
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="bayesian-regularization"
              checked
            />
            <label class="form-check-label" for="bayesian-regularization">
              Bayesian Regularization
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="bfgs-quasi-newton"
            />
            <label class="form-check-label" for="bfgs-quasi-newton">
              BFGS Quasi-Newton
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="resilient-backpropagation"
            />
            <label class="form-check-label" for="resilient-backpropagation">
              Resilient Backpropagation
            </label>
          </div>
        </div>
        <h4>Hidden Nodes</h4>
        <div class="mb-3 w-25">
          <label>Layer 1 Nodes</label>
          <input class="form-control" type="number" value="8" />
        </div>
        <div class="mb-3 w-25">
          <label>Layer 2 Nodes</label>
          <input class="form-control" type="number" value="3" />
        </div>

        <h4>Output Curve Resolution</h4>
        <div class="mb-3 w-25">
          <input class="form-control" type="number" value="200" />
        </div>
        <h4>Input Data Division</h4>
        <div class="mb-3 w-25">
          <label>Training</label>
          <input class="form-control" type="number" value="70" />
        </div>
        <div class="mb-3 w-25">
          <label>Validation</label>
          <input class="form-control" type="number" value="15" />
        </div>
        <div class="mb-3 w-25">
          <label>Testing</label>
          <input class="form-control" type="number" value="15" />
        </div>
      `,
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  runCalc() {
    window.console.log('upload data');
  }
}

customElements.define('neural-network-settings', neuralNetworkSettings);
