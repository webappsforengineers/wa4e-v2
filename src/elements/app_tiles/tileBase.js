import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement.js';

// This defines the base class to build the app-tiles
export class TileBase extends StyledElement {
  // define the JS object appConf to be passed to the tile from the app
  static get properties() {
    return {
      // use .appConf in the HTML tag to send a configuration JS object to
      // configure the tile the `.` tells the webcomponents not to serialise or
      // stringify the object
      appConf: { type: Object },
      appName: { type: String },
    };
  }

  // Add and destroy callbacks so components rerender on at the parent app request
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('update-children', () => this.requestUpdate());
  }

  disconnectedCallback() {
    window.removeEventListener('update-children', () => this.requestUpdate());
    super.disconnectedCallback();
  }

  updated(_changedProperties) {
    super.updated(_changedProperties);
    this.tileLoaded();
  }

  async tileLoaded() {
    const myEvent = new CustomEvent('loaded', {
      bubbles: true,
      composed: true,
    });
    await this.updateComplete;
    this.dispatchEvent(myEvent);
  }

  // Generic field making functions used by multiple apps

  // eslint-disable-next-line class-methods-use-this
  parseNum(maybeNum) {
    if (typeof maybeNum === 'number') {
      return maybeNum.toFixed(2);
    }
    // if it's not a number just return it
    return maybeNum;
  }

  makeNestedFields(keyOuter, callback) {
    return html`${Object.keys(this.appConf.fields[`${keyOuter}`]).map(
      key =>
        html`<div
          class="input-group"
          style="display: ${this.appConf.fields[keyOuter][key][3]};"
        >
          <label
            class="input-group-text text-wrap text-break font-size-sm"
            for="${key}"
            style="width: 30%; text-align: left;"
            >${html([this.appConf.fields[keyOuter][key].label])}</label
          >
          ${this.getInputTag(callback, key, keyOuter)}
          <label
            class="input-group-text text-wrap text-break"
            for="${key}"
            style="min-width: 20%; text-align: left;"
            >${html([this.appConf.fields[keyOuter][key].unit])}</label
          >
        </div>`
    )}`;
  }

  getInputTag(callback, key, keyOuter) {
    let inputTag;
    if (callback) {
      inputTag = html`<input
        class="form-control"
        id="${key}"
        .value="${this.appConf.fields[keyOuter][key][0]}"
        @change=${e => {
          this.appConf.fields[keyOuter][key][0] = Number(e.target.value);
        }}
      />`;
    } else {
      inputTag = html`<input
        class="form-control bg-light"
        disabled
        id="${key}"
        .value="${this.parseNum(this.appConf.fields[keyOuter][key][0])}"
      />`;
    }
    return inputTag;
  }

  /* eslint-disable class-methods-use-this */
  getSubComponents(subCompArr, superIdx) {
    const beforeTitle = [];
    const afterTitle = [];
    const afterContent = [];
    /* eslint-disable no-restricted-syntax */
    for (const [index, subComp] of subCompArr.entries()) {
      if (subComp.index === superIdx) {
        if (subComp.position === 'beforeTitle') {
          beforeTitle.push(index);
        } else if (subComp.position === 'afterTitle') {
          afterTitle.push(index);
        } else if (subComp.position === 'afterContent') {
          afterContent.push(index);
        }
      }
    }
    /* eslint-enable no-restricted-syntax */
    return [beforeTitle, afterTitle, afterContent];
  }
  /* eslint-enable class-methods-use-this */

  /* eslint-disable no-nested-ternary */
  makeSubComponent(index) {
    // Currently this only supports radio and test tiles but other subcomponent
    // tile classes can be added using the same structure as found in appGeneric
    const component = this.subComponents[index];
    const subcomponentHTML = html`
      ${component.type === 'radio-tile'
        ? html` <div style="display: ${component.display};">
            <radio-tile
              .appConf=${component}
              @clear="${() => {
                this.clearOutput();
              }}"
            ></radio-tile>
          </div>`
        : component.type === 'table-tile'
        ? html` <div>
            <table-tile .appConf=${component}></table-tile>
          </div>`
        : component.type === 'input-table'
        ? html` <div>
            <input-table .appConf=${component}></input-table>
          </div>`
        : component.type === 'test-tile'
        ? html` <div>
            <test-tile .appConf=${component}></test-tile>
          </div>`
        : html`<p>Component ${component.type} Not Recognised</p>`}
    `;
    return subcomponentHTML;
  }
  /* eslint-enable no-nested-ternary */
}
