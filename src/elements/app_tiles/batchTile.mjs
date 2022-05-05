import { html } from 'lit';
import { saveAs } from 'file-saver-es';
import * as XLSX from 'xlsx/xlsx.mjs'
import { TileBase } from './tileBase.js';
import { structureUtils } from '../../local_modules/appConfDeReStrut.mjs';

const xlsxUtils = XLSX.utils;

class batchTile extends TileBase {
  render() {
    // We need this as batch-tile has the unique property of needing all the app components
    const appConfArray = Object.values(this.appConf);
    this.localAppConf = appConfArray.find(
      element => element.type === 'batch-tile'
    );
    this.formFields = appConfArray.find(
      element => element.type === 'input-tile'
    ).fields;
    this.subComponents = appConfArray.find(
      element => element.type === 'input-tile'
    ).subComponents;
    this.fileData = null;
    this.workbook = null;
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
          <input class="form-control" type="file" id="dropbox" accept=".xlsx" />
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
      // eslint-disable-next-line no-alert
      window.alert('Single file upload only. All files removed.');
    } else {
      this.handleFile(files[0]);
    }
  }

  clickFile(e) {
    const { files } = e.currentTarget;
    if (files.length !== 1) {
      // eslint-disable-next-line no-alert
      window.alert('Single file upload only. All files removed.');
    } else {
      this.handleFile(files[0]);
    }
  }

  async handleFile(fileObj) {
    if (this.fileData !== null) {
      // eslint-disable-next-line no-alert
      window.alert('Single file upload only. Previous file is removed.');
    }

    const filePromise = fileObj.arrayBuffer();
    filePromise.then(
      value => {
        /* code if successful */
        // write the value of the file to fileData
        this.fileData = value;
        this.workbook = XLSX.read(this.fileData)
      },
      error => {
        /* code if some error */
        // eslint-disable-next-line no-alert
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
    // const csv = [];
    // let ix = 0;
    // let choiceIdx;

    const output = structureUtils.destructureComponents(this.appConf);
    let workbook = xlsxUtils.book_new();
    for (let sheet_ix in output) {
      xlsxUtils.book_append_sheet(
        workbook,
        xlsxUtils.aoa_to_sheet(output[sheet_ix]),
        output[sheet_ix][0][1],
        true
      );
    }
    //Stuff to save a sheet
    var wbout = XLSX.write(workbook, {bookType:'xlsx',  type: 'binary'});

    function s2ab(s) {
      const buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
      const view = new Uint8Array(buf);  //create uint8array as viewer
      for (let i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
      return buf;
    }

    const blob = new Blob([s2ab(wbout)],{type:"application/octet-stream"});
    // Find any radio tiles, title them and add possible checks.
    // Object.entries(this.subComponents).forEach(([subCompIdx, subComp]) => {
    //   if (subComp.type === 'radio-tile') {
    //     csv[ix] = ['Radio Choice:', subComp.title, subCompIdx].join(',');
    //     ix += 1;
    //     choiceIdx = 1;
    //     Object.entries(subComp.options).forEach(([radioChoice, value]) => {
    //       csv[ix] = [choiceIdx, radioChoice, value.check_status].join(',');
    //       ix += 1;
    //       choiceIdx += 1;
    //     });
    //   }
    // });
    // csv[ix] = ['Main Fields:'].join(',');
    // ix += 1;
    // // Now do the main fields
    // Object.keys(this.formFields).forEach(keyOuter => {
    //   Object.entries(this.formFields[keyOuter]).forEach(([keyInner, value]) => {
    //     csv[ix] = [keyOuter, keyInner, value.value].join(',');
    //     ix += 1;
    //   });
    // });
    // const csvstr = csv.join('\n');
    // const blob = new Blob([csvstr], { type: 'text,csv;charset=utf-8;' });

    saveAs(blob, `${this.appName}-template.xlsx`);
  }

  runCalc() {
    let input = []
    Object.values(this.workbook.Sheets).forEach((sheet) => {
      input.push(xlsxUtils.sheet_to_json(sheet, {header: 1}))
    });

    const upBook = structureUtils.restructureComponents(input);
    // upBook has arrays as 'value' these are generated from the columns in the spreadsheets.
    console.log(upBook);
    // abused variable used to pass coles of appconfig around without effecting the webpage
    let cloneConf;
    // object to store the output
    let outConf;

    // Input length should be generated by finding the number of values in each value array in upBook (or input)
    let inputLength;
    // loop over all the values in the arrays
    for (let ix; ix<inputLength; ix=+1) {
      // this clones appconf and then merges in upBook to update the value indexed by ix
      cloneConf = structureUtils.mergeWithOriginal(this.appConf, upBook, ix);
      this.launchCloneCalc(cloneConf) // runs the calculation and updates cloneConf

      // We now want to append clone to the output object outConf such that outconf has arrays in values.
      // i.e. the logic should be something like mergeWith (a, b, custom) custom(){if one of the values then concat}

    }

    //now use
    // structureUtils.destructureComponents(outConf)
    // then use xlxs to save this as a new workbook



    // // minipulate the csv string
    // const delimiter = ',';
    // // use split to create an array of each csv value row
    // const rows = this.fileData.split('\n');
    // // Map the rows
    // // split values from each row into an array
    // let arr = rows.map(row =>
    //   row.split(delimiter).map(item => item.replace(/(\r\n|\n|\r)/gm, ''))
    // );
    // arr = zip(...arr);
    // // run the calculation
    // // First we make a copy of appWebComponents
    // const appConfClone = cloneDeep(this.appConf);
    // const csv = [];
    // let ix = 0;
    // let choiceIdx;
    // let firstMain = true;
    //
    // // Create field names
    // Object.values(appConfClone).forEach(tile => {
    //   if (
    //     ['input-tile', 'derived-input-tile', 'output-tile'].includes(tile.type)
    //   ) {
    //     // Find any radio tiles, title them and add possible checks.
    //     Object.entries(tile.subComponents).forEach(
    //       ([subCompIdx, subCompVal]) => {
    //         if (subCompVal.type === 'radio-tile') {
    //           csv[ix] = ['radio choice', subCompVal.title, subCompIdx].join(
    //             ','
    //           );
    //           ix += 1;
    //           choiceIdx = 1;
    //           Object.entries(subCompVal.options).forEach(
    //             // eslint-disable-next-line no-unused-vars
    //             ([radioChoice, value]) => {
    //               csv[ix] = [choiceIdx, radioChoice].join(',');
    //               ix += 1;
    //               choiceIdx += 1;
    //             }
    //           );
    //         }
    //       }
    //     );
    //     // Now do the main fields
    //     // If its the first non subcomp
    //     if (firstMain === true) {
    //       csv[ix] = ['Main Fields:'].join(',');
    //       ix += 1;
    //       firstMain = false;
    //     }
    //     Object.keys(tile.fields).forEach(keyOuter => {
    //       // eslint-disable-next-line no-unused-vars
    //       Object.entries(tile.fields[keyOuter]).forEach(([keyInner, value]) => {
    //         csv[ix] = [keyOuter, keyInner].join(',');
    //         ix += 1;
    //       });
    //     });
    //   }
    // });
    //
    // function parseBool(inputValue) {
    //   if (
    //     [1, '1', 'TRUE', 'True', 'true', 'T', 't', 'y', 'yes'].includes(
    //       inputValue
    //     )
    //   ) {
    //     return true;
    //   }
    //   if (
    //     [0, '0', 'FALSE', 'False', 'false', 'F', 'f', 'n', 'no', ''].includes(
    //       inputValue
    //     )
    //   ) {
    //     return false;
    //   }
    //   // eslint-disable-next-line no-alert
    //   window.alert(`${inputValue} is not a valid boolean option in input csv`);
    //   return undefined;
    // }
    //
    // let fieldTypeSwitch;
    // let subCompIdx;
    // // Loop over the values from the third row onwards
    // arr.slice(2).forEach(input => {
    //   input.forEach((value, index) => {
    //     if (arr[0][index] === 'Radio Choice:') {
    //       fieldTypeSwitch = 'radio';
    //       subCompIdx = arr[2][index];
    //     } else if (arr[0][index] === 'Main Fields:') {
    //       fieldTypeSwitch = 'main';
    //     } else if (fieldTypeSwitch === 'radio') {
    //       Object.values(appConfClone).find(
    //         element => element.type === 'input-tile'
    //       ).subComponents[subCompIdx].options[arr[1][index]].check_status =
    //         parseBool(value);
    //     } else if (fieldTypeSwitch === 'main') {
    //       Object.values(appConfClone).find(
    //         element => element.type === 'input-tile'
    //       ).fields[arr[0][index]][arr[1][index]].value = Number(value);
    //     }
    //   });
    //   this.launchCloneCalc(appConfClone);
    //
    //   ix = 0;
    //   firstMain = true;
    //   Object.values(appConfClone).forEach(tile => {
    //     if (
    //       ['input-tile', 'derived-input-tile', 'output-tile'].includes(
    //         tile.type
    //       )
    //     ) {
    //       // Find any radio tiles, title them and add possible checks.
    //       // eslint-disable-next-line no-unused-vars
    //       Object.entries(tile.subComponents).forEach(([idx, subCompVal]) => {
    //         if (subCompVal.type === 'radio-tile') {
    //           ix += 1;
    //           Object.entries(subCompVal.options).forEach(
    //             // eslint-disable-next-line no-unused-vars
    //             ([radioChoice, value]) => {
    //               csv[ix] = [csv[ix], value.check_status].join(',');
    //               ix += 1;
    //             }
    //           );
    //         }
    //       });
    //       if (firstMain === true) {
    //         ix += 1;
    //         firstMain = false;
    //       }
    //       /* now do the main fields */
    //       Object.keys(tile.fields).forEach(keyOuter => {
    //         /* eslint-disable no-unused-vars */
    //         Object.entries(tile.fields[keyOuter]).forEach(
    //           ([keyInner, value]) => {
    //             csv[ix] = [csv[ix], value.value].join(',');
    //             ix += 1;
    //           }
    //         );
    //         /* eslint-enable no-unused-vars */
    //       });
    //     }
    //   });
    // });
    // // Save the output
    // const csvstr = csv.join('\n');
    // const blob = new Blob([csvstr], { type: 'text,csv;charset=utf-8;' });
    // saveAs(blob, `${this.appName}-output.csv`);
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
