import { html } from 'lit';
import { TileBase } from './tileBase.mjs';

class soilPropertiesHelp extends TileBase {
  render() {
    // this.testText = this.appConf.testText;
    // this.testLink = this.appConf.testLink;
    window.console.log('rendering test');
    return [
      super.render(),
      html`
        <p>
          Note: Values for soil properties can be calculated using the
          <a
            href="../mcc-su/index.html"
            target="_blank"
            rel="noopener noreferrer"
            >MCC-su app
          </a>
        </p>
      `,
    ];
  }
}

customElements.define(`soil-properties-help`, soilPropertiesHelp);
