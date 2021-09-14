import { html } from 'lit';
import { TileBase } from './tileBase';

class testSubTile extends TileBase {
  render() {
    this.testText = this.appConf.testText;
    window.console.log('rendering test');
    return [
      super.render(),
      html`
        <h2>'Hello world'</h2>
        <p>${this.testText}</p>
      `,
    ];
  }
}

customElements.define(`test-tile`, testSubTile);
