import { html } from 'lit';
import { TileBase } from '../tileBase.mjs';
import { Plotly } from '../../../local_modules/wa4e-math.js';

class trainNN extends TileBase {
  static get properties() {
    return {
      uploadedDatasetLength: {},
      performanceMSE: {},
      outputs: {},
      targets: {},
    };
  }

  constructor() {
    super();
    this.uploadedDatasetLength = '';
    this.performanceMSE = '';
    this.outputs = [];
    this.targets = [];
  }

  render() {
    window.onload = this.plotOutputsVsTargets();
    return [
      super.render(),
      html`
        <h3>Dataset Settings</h3>
        <!-- <h4>Please specify cell array names.</h4>
        <div class="mb-3">
          <label>Name of properties cell array</label>
          <input class="form-control" type="text" placeholder="properties" />
        </div>
        <div class="mb-3">
          <label>Name of curve data cell array</label>
          <input class="form-control" type="text" placeholder="curves" />
        </div> -->
        <!-- <h4>Upload data</h4>
        <div class="input-group mb-3">
          <input class="form-control" type="file" id="dropbox" accept=".xlsx" />
          <button
            id="dropbox-button"
            class="btn btn-outline-secondary"
          >
            Upload Data
          </button>
        </div> -->
        <!-- <div class="mb-3">
          <p>Raw data in expected format:</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#c1d100"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#C41E3A"
            class="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"
            />
          </svg>
        </div> -->
        <!-- <div class="mb-3">
          <button class="btn" style="background-color: #c1d100; color: #00557f">
            Use example variables
          </button>
        </div>
        <h4>Filter data by minimum and maximum allowable parameter values:</h4>
        <div class="container">
          <div class="row mb-3">
            <div class="col">
              <label for="p_min">P' minimum</label>
              <input
                class="form-control"
                type="number"
                value="0"
                name="p_min"
              />
            </div>
            <div class="col">
              <label for="p_max">P' maximum</label>
              <input
                class="form-control"
                type="number"
                value="1"
                name="p_min"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="p/pa_min">P'/Pa minimum</label>
              <input
                class="form-control"
                type="number"
                value="0"
                name="p/pa_min"
              />
            </div>
            <div class="col">
              <label for="p/pa_max">P'/Pa maximum</label>
              <input
                class="form-control"
                type="number"
                value="2"
                name="p/pa_max"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="ocr_min">OCR minimum</label>
              <input
                class="form-control"
                type="number"
                value="0"
                name="ocr_min"
              />
            </div>
            <div class="col">
              <label for="ocr_max">OCR maximum</label>
              <input
                class="form-control"
                type="number"
                value="2"
                name="ocr_max"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="e_min">e minimum</label>
              <input
                class="form-control"
                type="number"
                value="0"
                name="e_min"
              />
            </div>
            <div class="col">
              <label for="e_max">e maximum</label>
              <input
                class="form-control"
                type="number"
                value="1"
                name="e_max"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="dr_min">Dr% minimum</label>
              <input
                class="form-control"
                type="number"
                value="0"
                name="dr_min"
              />
            </div>
            <div class="col">
              <label for="dr_max">Dr% maximum</label>
              <input
                class="form-control"
                type="number"
                value="1"
                name="dr_max"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="d50_min">D50 minimum</label>
              <input
                class="form-control"
                type="number"
                value="0"
                name="d50_min"
              />
            </div>
            <div class="col">
              <label for="d50_max">D50 maximum</label>
              <input
                class="form-control"
                type="number"
                value="5"
                name="d50_max"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="cu_min">Cu minimum</label>
              <input
                class="form-control"
                type="number"
                value="0"
                name="cu_min"
              />
            </div>
            <div class="col">
              <label for="cu_max">Cu maximum</label>
              <input
                class="form-control"
                type="number"
                value="5"
                name="cu_max"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="g0_min">G0 minimum</label>
              <input
                class="form-control"
                type="number"
                value="0"
                name="g0_min"
              />
            </div>
            <div class="col">
              <label for="g0_max">G0 maximum</label>
              <input
                class="form-control"
                type="number"
                value="250"
                name="g0_max"
              />
            </div>
          </div>
        </div>

        <button class="btn" style="background-color: #c1d100; color: #00557f">
          Filter Data
        </button> -->
        <!-- 
        <table class="table table-bordered mt-3">
          <thead>
            <tr>
              <th scope="col">Loaded datapoints</th>
              <th scope="col">Filtered datapoints</th>
              <th scope="col">Final no. datapoints</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          </tbody>
        </table> -->

        <div class="text-center">
          <button
            class="btn btn-lg text-center"
            style="background-color: #c1d100; color: #00557f"
            @click=${this.preprocessData}
          >
            Preprocess Data
          </button>
          <p>Dataset length: ${this.uploadedDatasetLength}</p>
        </div>
        <br />
        <div class="text-center">
          <button
            class="btn btn-lg text-center"
            style="background-color: #c1d100; color: #00557f"
            @click=${this.trainModel}
          >
            Train Model
          </button>
          <p>
            Performance (Mean Square Error from test set):
            ${this.performanceMSE}
          </p>
        </div>
        <!-- <button
              class="btn"
              style="background-color: #c1d100; color: #00557f"
            >
              View Plot of Targets vs Outputs
            </button> -->
        <div id="TargetVsOutputPlot"></div>
      `,
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  preprocessData() {
    fetch('http://localhost:8080/api/preprocess-data/', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        window.console.log(json.dataset_length);
        this.uploadedDatasetLength = json.dataset_length;
        // localStorage.setItem('datasetLength', json.dataset_length);
        localStorage.setItem('inputs', JSON.stringify(json.inputs));
        localStorage.setItem('targets', JSON.stringify(json.targets));
      });
  }

  // eslint-disable-next-line class-methods-use-this
  trainModel() {
    fetch('http://localhost:8080/api/train-model/', {
      method: 'POST',
      // mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        inputs: localStorage.getItem('inputs'),
        targets: localStorage.getItem('targets'),
      }),
    })
      .then(response => response.json())
      .then(json => {
        window.console.log(json);
        this.performanceMSE = json.performance_mse;
        this.outputs = json.outputs;
        this.targets = json.targets;
        localStorage.setItem('outputs', json.outputs);
        localStorage.setItem('targets', json.targets);
      });
  }

  async plotOutputsVsTargets() {
    await this.updateComplete;

    // this.targets = localStorage.getItem('targets');
    // this.outputs = localStorage.getItem('outputs');

    const targetOutputData = [
      {
        x: this.targets.flat(),
        y: this.outputs.flat(),
        mode: 'markers',
        type: 'scatter',
      },
    ];

    const targetOutputLayout = { title: 'Outputs vs Target G/G0 values' };

    Plotly.newPlot('TargetVsOutputPlot', targetOutputData, targetOutputLayout, {
      showLink: true,
      plotlyServerURL: 'https://chart-studio.plotly.com',
      linkText: 'Play with this data',
    });
  }
}

customElements.define('train-nn', trainNN);
