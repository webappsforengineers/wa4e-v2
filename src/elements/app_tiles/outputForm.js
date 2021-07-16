import { html } from 'lit';
import { TileBase } from './tileBase';

class outputTile extends TileBase {
  render() {
    this.formFields = this.appConf.fields;
    this.outputFields = this.makeNestedFields();
    return [
      super.render(),
      html`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${this.appConf.title}</h2>
          <!-- Here are the forms attributes -->
          <p>${this.outputFields}</p>
        </div>
      `,
    ];
  }

  makeNestedFields() {
    return html`${Object.keys(this.formFields).map(
      keyOuter =>
        html`<h3>${keyOuter}</h3>
          ${Object.keys(this.appConf.fields[`${keyOuter}`]).map(
            key =>
              html` <div class="input-group">
                <label class="input-group-text col-3" for="${key}"
                  >${html([key])}</label
                >
                <input
                  class="form-control col-6 bg-light"
                  disabled
                  id="${key}"
                  .value="${this.appConf.fields[keyOuter][key][0]}"
                />
                <label class="input-group-text col-3" for="${key}"
                  >${html([this.appConf.fields[keyOuter][key][1]])}</label
                >
              </div>`
          )}`
    )}`;
  }
}

customElements.define('output-tile', outputTile);
