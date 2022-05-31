import { html } from 'lit';
import { TileBase } from './tileBase.mjs';

class radioTile extends TileBase {
  render() {
    this.checkOptions = this.appConf.options;
    this.checks = this.makeCheckCallBacks();
    return [
      super.render(),
      html`
        <h2>${html([this.appConf.title])}</h2>
        ${this.checks}
      `,
    ];
  }

  makeCheckCallBacks() {
    const checkFields = html`${Object.keys(this.checkOptions).map(
      key => html`<div
        class="form-check form-check-inline"
        style="display: ${this.appConf.options[key].visible};"
      >
        ${this.appConf.options[key].check_status
          ? html`<input
              class="form-check-input"
              type="radio"
              name="${this.appConf.title}"
              id="${key}"
              .value="${key}"
              checked
            />`
          : html`<input
              class="form-check-input"
              type="radio"
              name="${this.appConf.title}"
              id="${key}"
              .value="${key}"
              @click=${e => {
                this.appConf.options[key].check_status = e.target.checked;
                this.checkValue = key;
                // TODO: This seems overly complicated?
                Object.keys(this.checkOptions).forEach(notSelected => {
                  if (notSelected !== key) {
                    this.appConf.options[notSelected].check_status =
                      !e.target.checked;
                  }
                });
                if (this.appConf.clearOnClick) {
                  this.clearOutput();
                }
                if (this.appConf.modifyOnClick) {
                  this.modifyForm(this.checkValue);
                }
              }}
            />`}
        <label class="form-check-label" for="${key}">
          ${html([this.checkOptions[key].label])}
        </label>
      </div>`
    )}`;
    return checkFields;
  }

  modifyForm(checkValue) {
    const myEvent = new CustomEvent('modifyForm', {
      detail: { changeFields: this.appConf.onChange[checkValue] },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }

  clearOutput() {
    const myEvent = new CustomEvent('clear', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }
}

customElements.define(`radio-tile`, radioTile);
