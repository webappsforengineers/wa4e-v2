import { html } from 'lit';
import { saveAs } from 'file-saver-es';
import { toString } from 'lodash-es';
//import * as URL from 'url';

// eslint-disable-next-line import/extensions
import { TileBase } from './tileBase';



class batchTile extends TileBase {

  render() {
    // We need this as batch-tile has the unique property of needing all the app components
    this.localAppConf = this.appConf.find(element => element.type === 'batch-tile');
    this.formFields = this.appConf.find(element => element.type === 'input-tile').fields;
    this.fileData = null;
    return [
      super.render(),
      html`

        <h2>${html([this.localAppConf.title])}</h2>
        <h4>1. Get the template</h4>
        <button
          class="btn btn-outline-secondary col"
          @click=${() => this.generateCSV()}
        >Download Template</button>
        <h4>2. Fill the template.</h4>
        <p>Each column is a single calculation that will be run. Columns must be complete. Do not edit the generated fields. Any data that extends below the generated fields will not be used.</p>
        <h4>3. Upload the file</h4>
        <input type="file" id="dropbox" accept=".csv">
        <button
          id='dropbox-button'
          class="btn btn-outline-secondary col"
        >Submit file</button>
      `
    ];
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    let dropbox;
    dropbox = document.getElementById("dropbox");
    dropbox.addEventListener("change", (e) => this.clickFile(e), false);
    dropbox.addEventListener("dragenter", this.dragenter, false);
    dropbox.addEventListener("dragover", this.dragover, false);
    dropbox.addEventListener("drop", this.drop, false);
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
    const files = dt.files;

    if (files.length !== 1) {
      window.alert("Single file upload only. All files removed.")
    } else {
      this.handleFile(files[0]);
    }
  }

  clickFile(e){
    const {files} = e.currentTarget
    if (files.length !== 1) {
      window.alert("Single file upload only. All files removed.")
    } else {
      this.handleFile(files[0]);
    }
  }

  async handleFile(fileObj) {

    if (this.fileData !== null) {
      window.alert("Single file upload only. Previous file is removed.")
    }

    const filePromise = fileObj.text();
    filePromise.then(
      (value) => {
        /* code if successful */
        // write the value of the file to fileData
        this.fileData = value;
      },
      (error) => {
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
    Object.keys(this.formFields).forEach( (keyOuter) => {
      Object.entries(this.formFields[keyOuter]).forEach( ([keyInner, value]) => {
        csv[ix] = [keyOuter, keyInner,].join(', ');
        ix += 1;
      })
    })
    const csvstr = csv.join('\n')
    const blob = new Blob([csvstr], {type: "text,csv;charset=utf-8;"})
    saveAs(blob, `${this.appName}-template.csv`)
  }

  generateOutputCSV() {

  }

  runCalc() {
    document.getElementById("dropbox").value='';
  }


}

customElements.define('batch-tile', batchTile);
