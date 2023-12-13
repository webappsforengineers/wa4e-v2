import { html } from 'lit';
// import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { saveAs } from 'file-saver-es';
import { utils, writeFile, read, write } from 'xlsx';
import { cloneDeep } from 'lodash-es';
import { TileBase } from './tileBase.mjs';
import { structureUtils } from '../../local_modules/appConfDeReStrut.mjs';

const xlsxUtils = utils;

class uploadTile extends TileBase {
  constructor() {
    super();
    this.inputLength = null;
  }

  render() {
    // We need this as batch-tile has the unique property of needing all the app components
    return [
      super.render(),
      html`
        <div class="input-group">
          <input class="form-control" type="file" id="dropbox" accept=".xlsx" />
          <button
            id="dropbox-button"
            class="btn btn-outline-secondary"
            @click=${() => this.runCalc()}
          >
            Upload Data
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
        this.workbook = read(this.fileData);
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

  getSelectedRadios() {
    const missingRadios = [];
    const selectedRadios = [];

    Object.values(this.subComponents).forEach(subComp => {
      if (subComp.type === 'radio-tile') {
        let thisRadioSelected = false;
        Object.entries(subComp.options).forEach(([optionKey, option]) => {
          if (option.check_status) {
            selectedRadios.push({
              key: optionKey,
              title: subComp.title,
              value: option.label,
            });
            thisRadioSelected = true;
          }
        });
        if (!thisRadioSelected) {
          missingRadios.push(subComp.title);
        }
      }
    });

    return { missingRadios, selectedRadios };
  }

  /**
   * Create an input csv with each input tile input field as a column and each row as an input to run
   *
   */
  generateCSV() {
    const { missingRadios, selectedRadios } = this.getSelectedRadios();

    if (missingRadios.length > 0) {
      // eslint-disable-next-line no-alert
      window.alert(
        `Please select a value for the following fields: ${missingRadios.join(
          ', '
        )}.`
      );
      return;
    }

    const fieldOutput = structureUtils.destructureComponents(this.appConf);
    const radioOutput = structureUtils.destructureSelectedRadios(
      selectedRadios,
      fieldOutput.length
    );
    // eslint-disable-next-line no-undef
    const workbook = xlsxUtils.book_new();

    fieldOutput.forEach(element => {
      xlsxUtils.book_append_sheet(
        workbook,
        xlsxUtils.aoa_to_sheet(element),
        element[0][1],
        true
      );
    });

    if (selectedRadios.length > 0) {
      xlsxUtils.book_append_sheet(
        workbook,
        xlsxUtils.aoa_to_sheet(radioOutput),
        'input-selection',
        true
      );
    }

    // Stuff to save a sheet
    const wbout = write(workbook, { bookType: 'xlsx', type: 'binary' });

    function s2ab(s) {
      const buf = new ArrayBuffer(s.length); // convert s to arrayBuffer
      const view = new Uint8Array(buf); // create uint8array as viewer
      // eslint-disable-next-line no-bitwise
      for (let i = 0; i < s.length; i += 1) view[i] = s.charCodeAt(i) & 0xff; // convert to octet
      return buf;
    }

    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    if (selectedRadios.length > 0) {
      saveAs(
        blob,
        `${this.appName}-${selectedRadios
          .map(radio => radio.value)
          .join('-')}-template.xlsx`
      );
    } else {
      saveAs(blob, `${this.appName}-template.xlsx`);
    }
  }

  runCalc() {
    const upBookWithSub = structureUtils.xlsxBookToObj(
      this.workbook,
      this.appConf
    );

    const outConf = this.calcLoop(upBookWithSub);

    // Overwrite the sheets in the workbook, and save to new file with-output
    // appended at the end
    const outBook = structureUtils.destructureComponents(outConf);

    this.workbook.SheetNames.forEach((name, index) => {
      if (index < outBook.length) {
        const sheet = xlsxUtils.aoa_to_sheet(outBook[index]);
        this.workbook.Sheets[name] = sheet;
      }
    });

    writeFile(this.workbook, `${this.appName}-output.xlsx`, {
      bookType: 'xlsx',
      type: 'binary',
    });

    document.getElementById('dropbox').value = '';
    this.fileData = null;
  }

  calcLoop(upBookWithSub, test = false) {
    this.inputLength = Object.values(upBookWithSub).find(
      el => el.type === 'input-tile'
    ).valuesLength;
    let outConf = cloneDeep(upBookWithSub);

    for (let ix = 0; ix < this.inputLength; ix += 1) {
      // for batch calculations, each input variable is an array of values, so
      // merge appConf and upBook on array index ix only and then calculate
      // for value at ix

      const cloneConf = structureUtils.mergeWithOriginal(
        this.appConf,
        upBookWithSub,
        ix
      );

      if (!test) {
        this.launchCloneCalc(cloneConf);
      } else {
        this.appCalc(cloneConf);
      }

      // Now merge cloneConf into outConf
      outConf = structureUtils.mergeWithOriginalArray(
        outConf,
        cloneConf,
        this.inputLength
      );
    }
    return outConf;
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

customElements.define('upload-tile', uploadTile);
