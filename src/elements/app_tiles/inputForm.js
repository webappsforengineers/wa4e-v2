import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement';

class inputTile extends StyledElement {
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
    this.input_fields = this.makeNestedCallbackFields();
    return [
      super.render(),
      html`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${this.appConf.title}</h2>
          <!-- input form autogenerated fields -->
          <div>${this.input_fields}</div>
          <div>
            <!-- buttons -->
            <button class="btn btn-2" @click=${() => this.appUpdate()}>
              SUBMIT
            </button>
            <button class="btn btn-1" @click=${() => this.tileReload()}>
              RESET
            </button>
            <button class="btn btn-1" @click=${() => this.showHelp()}>
              HELP
            </button>
          </div>
        </div>
      `,
    ];
  }

  makeNestedCallbackFields() {
    return html`${Object.keys(this.formFields).map(
      keyOuter =>
        html`<h3>${keyOuter}</h3>
          ${Object.keys(this.appConf.fields[`${keyOuter}`]).map(
            key =>
              html` <div class="input-box-config">
                <label for="${key}">${html([key])}</label>
                <input
                  id="${key}"
                  .value="${this.appConf.fields[keyOuter][key][0]}"
                  @change=${e => {
                    this.appConf.fields[keyOuter][key][0] = e.target.value;
                  }}
                />
                <label for="${key}"
                  >${html([this.appConf.fields[keyOuter][key][1]])}</label
                >
              </div>`
          )}`
    )}`;
  }

  appUpdate() {
    const myEvent = new CustomEvent('updated', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }

  tileReload() {
    const myEvent = new CustomEvent('reset', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }

  showHelp() {
    window.alert(this.appConf.helpText);
  }
}

customElements.define('input-tile', inputTile);
