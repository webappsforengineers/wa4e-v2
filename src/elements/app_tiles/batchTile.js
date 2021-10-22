import { html } from 'lit';
import { saveAs } from 'file-saver-es';
import { zip, cloneDeep } from 'lodash-es';
// import * as URL from 'url';
// eslint-disable-next-line import/extensions
import { TileBase } from './tileBase';

class batchTile extends TileBase {
  render() {
    // We need this as batch-tile has the unique property of needing all the app components
    this.localAppConf = this.appConf.find(
      element => element.type === 'batch-tile'
    );
    this.formFields = this.appConf.find(
      element => element.type === 'input-tile'
    ).fields;
    this.fileData = null;
    return [
      super.render(),
      html`
        <h2>${html([this.localAppConf.title])}</h2>
        <h4>1. Get the template</h4>
        <button
          class="btn btn-outline-secondary"
          @click=${() => this.generateCSV()}
        >
          Download Template
        </button>
        <h4>2. Fill the template.</h4>
        <p>
          Each column is a single calculation that will be run. Columns must be
          complete. Do not edit the generated fields. Any data that extends
          below the generated fields will not be used.
        </p>
        <h4>3. Upload the file</h4>
        <div class="input-group">
          <input class="form-control" type="file" id="dropbox" accept=".csv" />
          <button
            id="dropbox-button"
            class="btn btn-outline-secondary"
            @click=${() => this.runCalc()}
          >
            Submit file
          </button>
        </div>
      `,
    ];
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    let dropbox;
    // eslint-disable-next-line prefer-const
    dropbox = document.getElementById('dropbox');
    dropbox.addEventListener('change', e => this.clickFile(e), false);
    dropbox.addEventListener('dragenter', e => this.dragenter(e), false);
    dropbox.addEventListener('dragover', e => this.dragover(e), false);
    dropbox.addEventListener('drop', e => this.drop(e), false);
  }

  // eslint-disable-next-line class-methods-use-this
  dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  // eslint-disable-next-line class-methods-use-this
  dragover(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  // eslint-disable-next-line class-methods-use-this
  drop(e) {
    e.stopPropagation();
    e.preventDefault();

    const dt = e.dataTransfer;
    const { files } = dt;

    if (files.length !== 1) {
      window.alert('Single file upload only. All files removed.');
    } else {
      this.handleFile(files[0]);
    }
  }

  clickFile(e) {
    const { files } = e.currentTarget;
    if (files.length !== 1) {
      window.alert('Single file upload only. All files removed.');
    } else {
      this.handleFile(files[0]);
    }
  }

  async handleFile(fileObj) {
    if (this.fileData !== null) {
      window.alert('Single file upload only. Previous file is removed.');
    }

    const filePromise = fileObj.text();
    filePromise.then(
      value => {
        /* code if successful */
        // write the value of the file to fileData
        this.fileData = value;
      },
      error => {
        /* code if some error */
        window.alert(`file load failed with error ${error}`);
        // remove all data from fileData
        this.fileData = null;
      }
    );
  }

  /**
   * Create an input csv with each input tile input field as a column and each row as an input to run
   * @returns {Object} An object that can be downloaded as a csv
   */
  generateCSV() {
    const csv = [];
    let ix = 0;
    Object.keys(this.formFields).forEach(keyOuter => {
      Object.entries(this.formFields[keyOuter]).forEach(([keyInner, value]) => {
        csv[ix] = [keyOuter, keyInner, value[0]].join(',');
        ix += 1;
      });
    });
    const csvstr = csv.join('\n');
    const blob = new Blob([csvstr], { type: 'text,csv;charset=utf-8;' });
    saveAs(blob, `${this.appName}-template.csv`);
  }

  runCalc() {
    // minipulate the csv string
    const delimiter = ',';
    // use split to create an array of each csv value row
    const rows = this.fileData.split('\n');
    // Map the rows
    // split values from each row into an array
    let arr = rows.map(row => row.split(delimiter));
    arr = zip(...arr);
    // run the calculation
    // First we make a copy of appWebComponents
    const appConfClone = cloneDeep(this.appConf);
    const csv = [];
    let ix = 0;
    // Create field names
    appConfClone.forEach(tile => {
      if (
        ['input-tile', 'derived-input-tile', 'output-tile'].includes(tile.type)
      ) {
        Object.keys(tile.fields).forEach(keyOuter => {
          // eslint-disable-next-line no-unused-vars
          Object.entries(tile.fields[keyOuter]).forEach(([keyInner, value]) => {
            csv[ix] = [keyOuter, keyInner].join(',');
            ix += 1;
          });
        });
      }
    });
    // Loop over the values from the third row onwards
    arr.slice(2).forEach(input => {
      input.forEach((value, index) => {
        appConfClone.find(element => element.type === 'input-tile').fields[
          arr[0][index]
        ][arr[1][index]][0] = value;
      });
      this.launchCloneCalc(appConfClone);
      ix = 0;
      appConfClone.forEach(tile => {
        if (
          ['input-tile', 'derived-input-tile', 'output-tile'].includes(
            tile.type
          )
        ) {
          Object.keys(tile.fields).forEach(keyOuter => {
            // eslint-disable-next-line no-unused-vars
            Object.entries(tile.fields[keyOuter]).forEach(
              ([keyInner, value]) => {
                csv[ix] = [csv[ix], value[0]].join(',');
                ix += 1;
              }
            );
          });
        }
      });
    });
    // Save the output
    const csvstr = csv.join('\n');
    const blob = new Blob([csvstr], { type: 'text,csv;charset=utf-8;' });
    saveAs(blob, `${this.appName}-output.csv`);
    // reset the form
    document.getElementById('dropbox').value = '';
    this.fileData = null;
  }

  launchCloneCalc(appConfClone) {
    const myEvent = new CustomEvent('cloneCalc', {
      detail: { appConfClone },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }
}

customElements.define('batch-tile', batchTile);
