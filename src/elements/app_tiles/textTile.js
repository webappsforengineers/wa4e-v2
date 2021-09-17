import { html } from 'lit';
import { TileBase } from './tileBase';

class textTile extends TileBase {
  render() {
    return [
      super.render(),
      html`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${this.appConf.title}</h2>
          <!-- Here are the forms attributes -->
          <p>${this.appConf.text}</p>
        </div>
      `,
    ];
  }
}

customElements.define('text-tile', textTile);
