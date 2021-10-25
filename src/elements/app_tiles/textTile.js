import { html } from 'lit';
import { TileBase } from './tileBase.js';

class textTile extends TileBase {
  render() {
    this.subComponents = this.appConf.subComponents;
    this.text = this.appConf.text;
    this.tileContent = this.arrangeFields();
    return [
      super.render(),
      html`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${html([this.appConf.title])}</h2>
          <!-- Here are the forms attributes -->
          <p>${this.tileContent}</p>
        </div>
      `,
    ];
  }

  // Arrange fields is simmilar amoungst all 1st level tiles, it orginises the
  // fields and the subcomponents in a way sutable for the tile.
  arrangeFields() {
    return html`${Object.keys(this.text).map((keyOuter, index) => {
      let beforeTitle;
      let afterTitle;
      let afterContent;
      if (typeof this.subComponents === 'undefined') {
        [beforeTitle, afterTitle, afterContent] = [[], [], []];
      } else {
        [beforeTitle, afterTitle, afterContent] = this.getSubComponents(
          this.subComponents,
          index
        );
      }
      /* eslint-disable no-nested-ternary */
      const htmlReturn = html`
        <div>
          ${html`${beforeTitle.map(subIndex =>
            this.makeSubComponent(subIndex)
          )}`}
        </div>
        <p class="${this.text[keyOuter].format}">${this.text[keyOuter].text}</p>
        <div>
          ${html`${afterTitle.map(subIndex =>
            this.makeSubComponent(subIndex)
          )}`}
        </div>
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

customElements.define('text-tile', textTile);
