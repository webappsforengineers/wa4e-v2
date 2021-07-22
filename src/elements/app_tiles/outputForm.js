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

customElements.define('output-tile', outputTile);
