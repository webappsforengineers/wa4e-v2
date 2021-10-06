import { html } from 'lit';
import { TileBase } from './tileBase';

class outputTile extends TileBase {
  render() {
    this.formFields = this.appConf.fields;
    this.subComponents = this.appConf.subComponents;
    this.outputFields = this.arrangeFields();
    return [
      super.render(),
      html`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${html([this.appConf.title])}</h2>
          <!-- Here are the forms attributes -->
          <p>${this.outputFields}</p>
        </div>
      `,
    ];
  }

  arrangeFields() {
    return html`${Object.keys(this.formFields).map((keyOuter, index) => {
      const [beforeTitle, afterTitle, afterContent] = this.getSubComponents(
        this.subComponents,
        index
      );
      const htmlReturn = html`
        <div>
          ${html`${beforeTitle.map(subIndex =>
            this.makeSubComponent(subIndex)
          )}`}
        </div>
        <h3>${html([keyOuter])}</h3>
        <div>
          ${html`${afterTitle.map(subIndex =>
            this.makeSubComponent(subIndex)
          )}`}
        </div>
        <div>${this.makeNestedFields(keyOuter)}</div>
        <div>
          ${html`${afterContent.map(subIndex =>
            this.makeSubComponent(subIndex)
          )}`}
        </div>
      `;
      return htmlReturn;
    })}`;
  }
}

customElements.define('output-tile', outputTile);
