import { html } from 'lit';
import { TileBase } from './tileBase.mjs';

class imageTile extends TileBase {
  render() {
    return [
      super.render(),
      html`
        <img
          class="img-fluid"
          width=${this.appConf.img_w}
          height=${this.appConf.img_h}
          src=${this.appConf.img_pth}
          alt="caisson diagrams"
        />
      `,
    ];
  }
}

customElements.define('image-tile', imageTile);
