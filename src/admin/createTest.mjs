import { html } from 'lit';
import { utils, read } from 'xlsx';
import { StyledElement } from '../styles/wa4eStyleElement.mjs';
import { structureUtils } from '../local_modules/appConfDeReStrut.mjs';
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

const appConfs = {
  'Please select': null,
  Caisson: caissonConf,
  ConsolidatedNCV: consolidatedncvConf,
  DragAnchor: dragAnchorConf,
  'MCC-Su': mccsuConf,
  NCV: ncvConf,
  Pinpiles: pinpilesConf,
  Pipe: pipeConf,
  SlidingPlet: spletConf,
  VH2M2T: vh2m2tConf,
  VHM: vhmConf,
  ZTI: ztiConf,
};
const xlsxUtils = utils;

class TestGenerator extends StyledElement {
  constructor() {
    super();
    this.inputFileData = null;
    this.outputFileData = null;
    this.testName = null;
    this.appOptions = this.createAppOptions();
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
    const testObject = {
      input: this.xlsxBookToObj(this.inputFileData),
      output: this.xlsxBookToObj(this.outputFileData),
    };
    return testObject;
  }

  xlsxBookToObj(workbook) {
    const input = [];
    Object.values(workbook.Sheets).forEach(sheet => {
      input.push(xlsxUtils.sheet_to_json(sheet, { header: 1 }));
    });

    const fieldInput = input.filter(el => el[0][1] !== 'input-selection');
    const radioInput = input.filter(el => el[0][1] === 'input-selection');

    const upBookFields = structureUtils.restructureComponents(fieldInput);
    if (radioInput.length > 0) {
      return structureUtils.restructureSubComponents(
        this.appConf.appWebComponents,
        upBookFields,
        radioInput[0]
      );
    }
    return upBookFields;
  }

  // runTest() {
  //
  // };

  /* eslint-disable class-methods-use-this */
  createAppOptions() {
    return html` ${Object.keys(appConfs).map(
      key => html`<option value=${key}>${key}</option>`
    )}`;
  }
  /* eslint-enable class-methods-use-this */
}

customElements.define('test-generator', TestGenerator);
