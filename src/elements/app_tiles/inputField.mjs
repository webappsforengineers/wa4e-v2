import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { StyledElement } from '../../styles/wa4eStyleElement.mjs';

export class InputField extends StyledElement {
  // define the config object
  static get properties() {
    return {
      // use .appConf in the HTML tag to send a configuration JS object to
      // configure the tile the `.` tells the webcomponents not to serialise or
      // stringify the object
      appConf: { type: Object },
      callback: { type: Boolean },
      key: { type: String },
      lowerBound: { type: Number },
      upperBound: { type: Number },
    };
  }

  // Add and destroy callbacks so components rerender on at the parent app request
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('update-bounds', () => this.setBounds());
    window.addEventListener('update-children', () => this.requestUpdate());
  }

  disconnectedCallback() {
    window.removeEventListener('update-bounds', () => this.setBounds());
    window.removeEventListener('update-children', () => this.requestUpdate());
    super.disconnectedCallback();
  }

  constructor() {
    super();
    this.lowerBound = -1e256;
    this.upperBound = +Infinity;
  }

  render() {
    return html`<div
      class="input-group was-validated"
      style="display: ${this.appConf.visible};"
    >
      <label
        class="input-group-text text-wrap text-break font-size-sm"
        for="${this.key}"
        style="width: 30%; text-align: left;"
        >${unsafeHTML(this.appConf.label)}</label
      >
      ${this.getInputTag()}
      <label
        class="input-group-text text-wrap text-break"
        for="${this.key}"
        style="min-width: 20%; text-align: left;"
        >${unsafeHTML(this.appConf.unit)}</label
      >
    </div> `;
  }

  getInputTag() {
    this.setBounds();
    let inputTag;
    if (this.callback) {
      inputTag = html`<input
        type="number"
        class="form-control"
        id="${this.key}"
        .value="${this.appConf.value}"
        @change=${e => {
          this.appConf.value = Number(e.target.value);
          this.triggerBounds();
        }}
        min=${this.lowerBound}
        max=${this.upperBound}
        step="0.000001"
      />`;
    } else {
      inputTag = html`<input
        class="form-control ${this.checkValid()}"
        readonly
        id="${this.key}"
        .value="${this.parseNum(this.appConf.value)}"
        min=${this.lowerBound}
        max=${this.upperBound}
        step="0.000001"
      />`;
    }

    return inputTag;
  }

  setBounds() {
    if (typeof this.appConf.lb !== 'undefined' && this.appConf.lb !== '') {
      if (this.appConf.lb instanceof Function) {
        this.lowerBound = this.appConf.lb();
      } else {
        this.lowerBound = this.appConf.lb;
      }
    }
    if (typeof this.appConf.ub !== 'undefined' && this.appConf.ub !== '') {
      if (this.appConf.ub instanceof Function) {
        this.upperBound = this.appConf.ub();
      } else {
        this.upperBound = this.appConf.ub;
      }
    }
  }

  triggerBounds() {
    const myEvent = new CustomEvent('update-bounds', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }

  checkValid() {
    if (
      this.appConf.value === 'undefined' ||
      this.appConf.value === '' ||
      this.appConf.value === null
    ) {
      return 'bg-light';
    }
    if (
      this.lowerBound <= this.appConf.value &&
      this.appConf.value <= this.upperBound
    ) {
      return 'bg-light';
    }
    return 'bg-danger';
  }

  // eslint-disable-next-line class-methods-use-this
  parseNum(maybeNum) {
    if (typeof maybeNum === 'number') {
      return maybeNum.toFixed(2);
    }
    // if it's not a number just return it
    return maybeNum;
  }
}

customElements.define('input-field', InputField);
