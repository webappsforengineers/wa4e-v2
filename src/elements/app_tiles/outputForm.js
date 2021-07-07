import { LitElement, html } from 'lit';
import { we4eGrids, we4eStyles } from '../../styles/we4eStyles.js';

class outputTile extends LitElement {
  // Get the styles
  static get styles() {
    return [we4eStyles, we4eGrids];
  }

  // define the JS object and/or html attributes to be passed to the app
  static get properties() {
    return {
      // use .appConf in the HTML tag to send a configuration JS object to
      // configure the tile the `.` tells the webcomponents not to serialise or
      // stringify the object
      appConf: { type: Object },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('update-children', () => this.requestUpdate());
  }

  disconnectedCallback() {
    window.removeEventListener('update-children', () => this.requestUpdate());
    super.disconnectedCallback();
  }

  render() {
    this.formFields = this.appConf.fields;
    this.outputFields = this.makeNestedFields();
    return html`
      <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
      <div
        class="grid-item app-card"
        style="--xstart:${this.appConf.gridPosition.xStart};
                  --ystart:${this.appConf.gridPosition.yStart};
                  --xend:${this.appConf.gridPosition.xEnd};
                  --yend:${this.appConf.gridPosition.yEnd};"
      >
        <h2>${this.appConf.title}</h2>
        <!-- Here are the forms attributes -->
        <p>${this.outputFields}</p>
      </div>
    `;
  }

  makeNestedFields() {
    return html`${Object.keys(this.formFields).map(
      keyOuter =>
        html`<h3>${keyOuter}</h3>
          ${Object.keys(this.appConf.fields[`${keyOuter}`]).map(
            key =>
              html` <div>
                <label for="${key}">${html([key])}</label>
                <input
                  id="${key}"
                  .value="${this.appConf.fields[keyOuter][key][0]}"
                />
                <label for="${key}"
                  >${html([this.appConf.fields[keyOuter][key][1]])}</label
                >
              </div>`
          )}`
    )}`;
  }
}

customElements.define('output-tile', outputTile);