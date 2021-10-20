import { html } from 'lit';
import { saveAs } from 'file-saver-es';
import { toString } from 'lodash-es';
import { Dropzone } from '../../local_modules/wa4e-math.js'
import { TileBase } from './tileBase';



class batchTile extends TileBase {
  render() {
    // We need this as batch-tile has the unique property of needing all the app components
    this.localAppConf = this.appConf.find(element => element.type === 'batch-tile');
    this.formFields = this.appConf.find(element => element.type === 'input-tile').fields;
    Dropzone.options.myDropzone = { maxFiles:1, addRemoveLinks:true };
    return [
      super.render(),
      html`
        <link rel="stylesheet" href="../../../node_modules/dropzone/dist/dropzone.css" />
        <h2>${html([this.localAppConf.title])}</h2>
        <h4>1. Get the template</h4>
        <button
          class="btn btn-outline-secondary col"
          @click=${() => this.generateCSV()}
        >Download Template</button>
        <h4>2. Fill the template.</h4>
        <p>Each column is a single calculation that will be run. Columns must be complete. Do not edit the generated fields. Any data that extends below the generated fields will not be used.</p>
        <h4>Upload the file</h4>
        <form id='myDropzone' action="/target" class="dropzone"></form>
      `
    ];
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

  }
}

customElements.define('batch-tile', batchTile);
