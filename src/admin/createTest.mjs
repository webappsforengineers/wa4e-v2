import { html } from 'lit';
import { read } from 'xlsx';
import { StyledElement } from '../styles/wa4eStyleElement.mjs';
import { structureUtils } from '../local_modules/appConfDeReStrut.mjs';
import { TestMath } from '../../test/black-box/batchTestingClass.mjs';
import {
  caissonConf,
  consolidatedncvConf,
  dragAnchorConf,
  mccsuConf,
  ncvConf,
  pinpilesConf,
  pipeConf,
  spletConf,
  vh2m2tConf,
  vhmConf,
  ztiConf,
} from '../app_modules/moduleConf.mjs';

import {
  calculateCaisson,
  calculateConsolidatedNcV,
  calculateDragAnchor,
  calculateMCC,
  calculateNcV,
  calculatePinpiles,
  calculatePipe,
  calculateSlidingPLET,
  calculateVH2M2T,
  calculateVHM,
  calculateZTI,
} from '../local_modules/wa4e-math.js';

const appConfs = {
  'Please select': null,
  Caisson: caissonConf,
  ConsolidatedNCV: consolidatedncvConf,
  DragAnchor: dragAnchorConf,
  MCCSu: mccsuConf,
  NCV: ncvConf,
  Pinpiles: pinpilesConf,
  Pipe: pipeConf,
  SlidingPlet: spletConf,
  VH2M2T: vh2m2tConf,
  VHM: vhmConf,
  ZTI: ztiConf,
};
const appCalcs = {
  'Please select': null,
  Caisson: calculateCaisson,
  ConsolidatedNCV: calculateConsolidatedNcV,
  DragAnchor: calculateDragAnchor,
  MCCSu: calculateMCC,
  NCV: calculateNcV,
  Pinpiles: calculatePinpiles,
  Pipe: calculatePipe,
  SlidingPlet: calculateSlidingPLET,
  VH2M2T: calculateVH2M2T,
  VHM: calculateVHM,
  ZTI: calculateZTI,
};

// Generates html option code.
function createAppOptions() {
  return html` ${Object.keys(appConfs).map(
    key => html`<option value=${key}>${key}</option>`
  )}`;
}

class TestGenerator extends StyledElement {
  constructor() {
    super();
    this.inputFileData = null;
    this.outputFileData = null;
    this.testName = null;
    this.appOptions = createAppOptions();
    this.testObjest = null;
  }

  render() {
    return [
      super.render(),
      html`
        <div class="row">
          <h1>Create Test Data</h1>
        </div>
        <div class="input-group">
          <label class="input-group-text" for="test-name">Test Name</label>
          <input class="form-control" type="text" id="test-name" />
          <label class="input-group-text" for="app-selector">Pick App</label>
          <select
            id="app-selector"
            class="form-select"
            aria-label="Default select example"
          >
            ${this.appOptions}
          </select>
        </div>
        <div class="input-group">
          <label class="input-group-text" for="input-dropbox">Input Data</label>
          <input
            class="form-control"
            type="file"
            id="input-dropbox"
            accept=".xlsx"
          />
        </div>
        <div class="input-group">
          <label class="input-group-text" for="output-dropbox"
            >Output Data</label
          >
          <input
            class="form-control"
            type="file"
            id="output-dropbox"
            accept=".xlsx"
          />
        </div>
        <div class="d-grid">
          <button
            id="submit-button"
            class="btn btn-primary"
            disabled
            @click=${() => this.checkSubmit()}
          >
            Submit files
          </button>
          <button
            id="test-button"
            class="btn btn-primary"
            disabled
            @click=${() => this.runTest()}
          >
            Run Test
          </button>
          <button
            id="download-button"
            class="btn btn-primary"
            disabled
            @click=${() => this.downloadTest()}
          >
            Download Test Data
          </button>
        </div>
        <div class="row">
          <textarea id="display-area" rows="10" cols="50" disabled></textarea>
        </div>
      `,
    ];
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    const inputDropbox = document.getElementById('input-dropbox');
    const outputDropbox = document.getElementById('output-dropbox');
    inputDropbox.addEventListener('change', e => this.clickFile(e), false);
    outputDropbox.addEventListener('change', e => this.clickFile(e), false);
  }

  clickFile(e) {
    const { files } = e.currentTarget;
    this.handleFile(files[0], e.currentTarget.id);
  }

  async handleFile(fileObj, targetID) {
    const filePromise = fileObj.arrayBuffer();

    filePromise.then(
      value => {
        /* code if successful */
        // write the value of the file to fileData
        if (targetID === 'input-dropbox') {
          this.inputFileData = read(value);
        } else if (targetID === 'output-dropbox') {
          this.outputFileData = read(value);
        } else {
          throw Error(`${targetID} is an unknown element id`);
        }
        if (this.inputFileData !== null && this.outputFileData !== null) {
          const button = document.getElementById('submit-button');
          button.disabled = false;
        }
      },
      error => {
        /* code if some error */
        // eslint-disable-next-line no-alert
        window.alert(`file load failed with error ${error}`);
      }
    );
  }

  checkSubmit() {
    const testNameElement = document.getElementById('test-name');
    this.testName = testNameElement.value;
    const testAppKey = document.getElementById('app-selector').value;
    this.appConf = appConfs[testAppKey];
    this.appCalc = appCalcs[testAppKey];

    if (this.testName === '' || this.testName === null) {
      // eslint-disable-next-line no-alert
      window.alert(`Please provide a name for this test`);
    } else if (this.appConf === null) {
      // eslint-disable-next-line no-alert
      window.alert(`Please pick a app for this test`);
    } else {
      this.makeJSObj();
    }
  }

  makeJSObj() {
    this.testObject = {
      input: structureUtils.xlsxBookToObj(this.inputFileData, this.appConf),
      output: structureUtils.xlsxBookToObj(this.outputFileData, this.appConf),
    };
    const displayArea = document.getElementById('display-area');
    displayArea.value = JSON.stringify(this.testObject);
    const button = document.getElementById('test-button');
    button.disabled = false;
  }

  runTest() {
    const tempObj = new TestMath(this.testObject, this.appConf, this.appCalc);
    tempObj.runTest();
    if (tempObj.result) {
      const button = document.getElementById('download-button');
      button.disabled = false;
    } else {
      /* eslint-disable-next-line no-alert */
      window.alert(
        'Test Failed please check input/output files and check again'
      );
    }
  }

  downloadTest() {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      `data:text/plain;charset=utf-8, ${encodeURIComponent(
        `export const testConf =${JSON.stringify(this.testObject)}`
      )}`
    );
    element.setAttribute('download', `${this.testName}.mjs`);
    document.body.appendChild(element);
    element.click();
  }
}

customElements.define('test-generator', TestGenerator);
