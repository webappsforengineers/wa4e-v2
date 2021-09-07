import { html } from 'lit';
import { TileBase } from './tileBase';

class optimizationTile extends TileBase {
  render() {
    this.checkOptions = this.appConf.options;
    this.formFields = this.appConf.fields;
    this.checks = this.makeCheckCallBacks();
    this.outputFields = this.makeNestedFields();
    return [
      super.render(),
      html`
        <h2>${this.appConf.title}</h2>
        <div>${this.checks}</div>
        <p>${this.outputFields}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-around p-2">
          <!-- buttons -->
          <button
            class="btn btn-primary col-sm-12 col-md-6"
            @click=${() => this.appOptimize()}
          >
            OPTIMIZE
          </button>
        </div>
      `,
    ];
  }

  appOptimize() {
    const myEvent = new CustomEvent('optimize', {
      bubbles: true,
      composed: true,
    });
    this.clearOutput();
    this.dispatchEvent(myEvent);
  }

  clearOutput() {
    const myEvent = new CustomEvent('clear', {
      bubbles: true,
      composed: true,
    });
    this.formFields[''].Solution[0] = null;
    this.formFields[''].solution_beta_pV[0] = null;
    this.formFields[''].solution_beta_pH[0] = null;
    this.formFields[''].solution_beta_pM[0] = null;
    this.dispatchEvent(myEvent);
  }

  makeNestedFields() {
    return html`${Object.keys(this.formFields).map(
      keyOuter =>
        html`<h3>${keyOuter}</h3>
          ${Object.keys(this.appConf.fields[`${keyOuter}`]).map(
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
          )}`
    )}`;
  }

  makeCheckCallBacks() {
    return html` ${Object.keys(this.checkOptions).map(
      key =>
        html` <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="${this.appConf.title}"
            id="${key}"
            .value="${key}"
            @click=${e => {
              this.appConf.options[key][0] = e.target.checked;
              // TODO: This seems overly complicated?
              Object.keys(this.checkOptions).map(
                // eslint-disable-next-line array-callback-return
                notSelected => {
                  if (notSelected !== key) {
                    this.appConf.options[notSelected][0] = !e.target.checked;
                  }
                }
              );
              this.clearOutput();
            }}
          />
          <label class="form-check-label" for="${key}"
            >${html([this.appConf.options[key][1]])}</label
          >
        </div>`
    )}`;
  }
}

customElements.define(`optimization-tile`, optimizationTile);
