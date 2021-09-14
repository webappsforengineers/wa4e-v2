import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement';

// This defines the base class to build the app-tiles
export class TileBase extends StyledElement {
  // define the JS object appConf to be passed to the tile from the app
  static get properties() {
    return {
      // use .appConf in the HTML tag to send a configuration JS object to
      // configure the tile the `.` tells the webcomponents not to serialise or
      // stringify the object
      appConf: { type: Object },
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

  makeNestedFields(keyOuter) {
    return html`${Object.keys(this.appConf.fields[`${keyOuter}`]).map(
      key =>
        html` <div class="input-group">
          <label
            class="input-group-text text-wrap text-break font-size-sm"
            for="${key}"
            style="width: 30%; text-align: left;"
            >${html([this.appConf.fields[keyOuter][key][2]])}</label
          >
          <input
            class="form-control bg-light"
            disabled
            id="${key}"
            .value="${this.appConf.fields[keyOuter][key][0]}"
          />
          <label
            class="input-group-text text-wrap text-break"
            for="${key}"
            style="min-width: 20%; text-align: left;"
            >${html([this.appConf.fields[keyOuter][key][1]])}</label
          >
        </div>`
    )}`;
  }

  makeNestedCallbackFields(keyOuter) {
    return html` ${Object.keys(this.appConf.fields[`${keyOuter}`]).map(
      key =>
        html`<div class="input-group">
          <span
            class="input-group-text col-auto text-wrap text-break"
            for="${key}"
            style="width: 25%; text-align: right;"
            >${html([this.appConf.fields[keyOuter][key][2]])}</span
          >
          <input
            class="form-control"
            id="${key}"
            .value="${this.appConf.fields[keyOuter][key][0]}"
            @change=${e => {
              this.appConf.fields[keyOuter][key][0] = Number(e.target.value);
            }}
          />
          <span
            class="input-group-text col-auto text-wrap text-break"
            for="${key}"
            style="width: 20%; text-align: left;"
            >${html([this.appConf.fields[keyOuter][key][1]])}</span
          >
        </div>`
    )}`;
  }

  /* eslint-disable no-nested-ternary */
  makeSubComponent(index) {
    // Currently this only supportsd radio tiles but other subcomponent tile
    // classes can be added using the same structure as found in appGeneric
    const component = this.subComponents.find(
      element => element.index === index
    );
    const subcomponentHTML = html`
      ${component.type === 'radio-tile'
        ? html` <div class="card mx-auto p-1">
            <radio-tile .appConf=${component}></radio-tile>
          </div>`
        : component.type === 'test-tile'
        ? html` <div class="card mx-auto p-1">
            <test-tile .appConf=${component}></test-tile>
          </div>`
        : html`<p>Component ${component.type} Not Recognised</p>`}
    `;
    return subcomponentHTML;
  }
  /* eslint-enable no-nested-ternary */
}
