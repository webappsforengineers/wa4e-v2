import { html } from 'lit';
import { TileBase } from './tileBase';

class radioTile extends TileBase {

  constructor() {
    super();
    this.checkValue = 'Circular';
  }

  render() {
    this.checkOptions = this.appConf.options;
    this.checks = this.makeCheckCallBacks();
    return [
      super.render(),
      html`
        <h2>${this.appConf.title}</h2>
        <div>${this.checks}</div>
      `,
    ];
  }

  makeCheckCallBacks() {
    return html`${Object.keys(this.checkOptions).map(
      key =>
        html`<div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="${this.appConf.title}"
            id="${key}"
            .value="${this.appConf.options[key]}"
            @click=${e => {
              this.appConf.options[key] = e.target.checked;
              this.checkValue = key;
              // TODO: This seems overly complicated?
              Object.keys(this.checkOptions).map(
                // eslint-disable-next-line array-callback-return
                notSelected => {
                  if (notSelected !== key) {
                    this.appConf.options[notSelected] = !e.target.checked;
                  }
                }
              );
              this.modifyForm();
            }}
          />
          <label class="form-check-label" for="${key}">${html([key])}</label>
        </div>`
    )}`;
  }

  modifyForm() {
    const myEvent = new CustomEvent('modifyForm', {
      detail: {changeFields: this.appConf.onChange[this.checkValue]},
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }

}

customElements.define(`radio-tile`, radioTile);
