import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { TileBase } from './tileBase.mjs';

class checkboxTile extends TileBase {
  render() {
    this.checkOptions = this.appConf.options;
    this.checks = this.makeCheckCallBacks();
    return [
      super.render(),
      html`
        <h3>${unsafeHTML(this.appConf.title)}</h3>
        ${this.checks}
      `,
    ];
  }

  makeCheckCallBacks() {
    const checkFields = html`${Object.keys(this.checkOptions).map(
      key => html`<div
        class="form-check"
        style="display: ${this.appConf.options[key].visible};"
      >
        ${this.appConf.options[key].check_status
          ? html`
              <input
                class="form-check-input"
                type="checkbox"
                name="${this.appConf.title}"
                id="${key}"
                .value="${key}"
                checked
                @click=${() => {
                  this.appConf.options[key].check_status =
                    !this.appConf.options[key].check_status;
                  window.console.log(this.appConf.options[key].check_status);
                  this.checkValue = key;
                  // window.console.log(this.checkValue);
                  if (this.appConf.clearOnClick) {
                    this.clearOutput();
                  }
                  if (this.appConf.modifyOnClick) {
                    this.unselectItem(this.checkValue);
                  }
                }}
              />
            `
          : html` <input
              class="form-check-input"
              type="checkbox"
              name="${this.appConf.title}"
              id="${key}"
              .value="${key}"
              @click=${() => {
                this.appConf.options[key].check_status =
                  !this.appConf.options[key].check_status;
                window.console.log(this.appConf.options[key].check_status);
                this.checkValue = key;
                if (this.appConf.clearOnClick) {
                  this.clearOutput();
                }
                if (this.appConf.modifyOnClick) {
                  this.selectItem(this.checkValue);
                }
              }}
            />`}
        <label class="form-check-label" for="${key}">
          ${unsafeHTML(this.checkOptions[key].label)}
        </label>
      </div>`
    )}`;
    return checkFields;
  }

  selectItem(checkValue) {
    const myEvent = new CustomEvent('modifyForm', {
      detail: { changeFields: this.appConf.onSelect[checkValue] },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }

  unselectItem(checkValue) {
    const myEvent = new CustomEvent('modifyForm', {
      detail: { changeFields: this.appConf.onUnselect[checkValue] },
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

customElements.define(`checkbox-tile`, checkboxTile);
