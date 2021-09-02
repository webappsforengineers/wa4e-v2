import { html } from 'lit';
import { TileBase } from './tileBase';

class optimizationTile extends TileBase {
  render() {
    this.formFields = this.appConf.fields;
    this.checks = this.makeCheckCallBacks();
    this.outputFields = this.makeNestedFields();
    return [
      super.render(),
      html`
      <div>${this.checks}</div>
      <p>${this.outputFields}</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-around p-2">
        <!-- buttons -->
        <button
          class="btn btn-primary col-sm-12 col-md-6"
          @click=${() => this.appOptimize()}

        >
          SUBMIT
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
    this.dispatchEvent(myEvent);
  }
  makeNestedFields() {
    return html`${Object.keys(this.formFields).map(
      keyOuter =>
        html`<h3>${keyOuter}</h3>
          ${Object.keys(this.appConf.fields[`${keyOuter}`]).map(
          key =>
            html` <div class="input-group">
                <label class="input-group-text text-wrap text-break font-size-sm"
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
                <label class="input-group-text text-wrap text-break"
                       for="${key}"
                       style="min-width: 20%; text-align: left;"
                  >${html([this.appConf.fields[keyOuter][key][1]])}</label
                >
              </div>`
        )}`
    )}`;
  }
}
