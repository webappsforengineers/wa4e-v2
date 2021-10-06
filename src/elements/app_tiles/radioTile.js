import { html } from 'lit';
import { TileBase } from './tileBase';

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
        style="display: ${this.appConf.options[key][2]};"
      >
        ${this.appConf.options[key][0]
          ? html`<input
              class="form-check-input"
              type="radio"
              name="${this.appConf.title}"
              id="${key}"
              .value="${key}"
              @click=${e => {
                this.appConf.options[key][0] = e.target.checked;
                this.checkValue = key;
                // TODO: This seems overly complicated?
                Object.keys(this.checkOptions).map(
                  // eslint-disable-next-line array-callback-return
                  notSelected => {
                    if (notSelected !== key) {
                      this.appConf.options[notSelected][0] = !e.target.checked;
                    }
                  }
                );
                if (this.appConf.clearOnClick) {
                  this.clearOutput();
                }
                if (this.appConf.modifyOnClick) {
                  this.modifyForm(this.checkValue);
                }
              }}
              checked
            />`
          : html`<input
              class="form-check-input"
              type="radio"
              name="${this.appConf.title}"
              id="${key}"
              .value="${key}"
              @click=${e => {
                this.appConf.options[key][0] = e.target.checked;
                this.checkValue = key;
                // TODO: This seems overly complicated?
                Object.keys(this.checkOptions).map(
                  // eslint-disable-next-line array-callback-return
                  notSelected => {
                    if (notSelected !== key) {
                      this.appConf.options[notSelected][0] = !e.target.checked;
                    }
                  }
                );
                if (this.appConf.clearOnClick) {
                  this.clearOutput();
                }
                if (this.appConf.modifyOnClick) {
                  this.modifyForm(this.checkValue);
                }
              }}
            />`}
        <label class="form-check-label" for="${key}">
          ${html([this.checkOptions[key][1]])}
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
