import { html } from 'lit';
import { TileBase } from './tileBase';

class outputTile extends TileBase {
  render() {
    this.formFields = this.appConf.fields;
    this.outputFields = this.arrangeFields();
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

  arrangeFields() {
    return html`${Object.keys(this.formFields).map(keyOuter => {
      let htmlReturn = html``;
      htmlReturn = html`
        <h3>${keyOuter}</h3>
        ${this.makeNestedFields(keyOuter)}
      `;
      return htmlReturn;
    })}`;
  }
}

customElements.define('output-tile', outputTile);
