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
                // this.checkValue = key;
                // this.appConf.options[key].check_status = !this.appConf.options[key].check_status;
                // TODO: This seems overly complicated?
                // Object.keys(this.checkOptions).forEach(notSelected => {
                //   if (notSelected !== key) {
                //     this.appConf.options[notSelected].check_status =
                //       !e.target.checked;
                //   }
                // });
                // if (this.appConf.clearOnClick) {
                //   this.clearOutput();
                // }
                // if (this.appConf.modifyOnClick) {
                //   this.modifyForm(this.checkValue);
                // }
              }}
            />`}
        <label class="form-check-label" for="${key}">
          ${unsafeHTML(this.checkOptions[key].label)}
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
    window.console.log(checkValue);
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
