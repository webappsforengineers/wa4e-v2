import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { TileBase } from './tileBase.mjs';

class formTileNoSpinner extends TileBase {
  // extend the properties class
  static get properties() {
    const newProperties = {
      callback: { type: Boolean },
    };
    return Object.assign(newProperties, super.properties);
  }

  render() {
    this.formFields = this.appConf.fields;
    this.subComponents = this.appConf.subComponents;
    this.fields = this.arrangeFields();
    return [
      super.render(),
      html`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${unsafeHTML(this.appConf.title)}</h2>
          <!-- input form autogenerated fields -->
          <div>${this.fields}</div>
          <p>
            Please wait while the network is trained and predictions made. This
            could take up to 2 minutes.
          </p>
          <div>${this.buttonGroup()}</div>
        </div>
      `,
    ];
  }

  arrangeFields() {
    return html`${Object.keys(this.formFields).map((keyOuter, index) => {
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
      return html`
        <div>
          ${html`${beforeTitle.map(subIndex =>
            this.makeSubComponent(subIndex)
          )}`}
        </div>
        <h3>${unsafeHTML(keyOuter)}</h3>
        <div>
          ${html`${afterTitle.map(subIndex =>
            this.makeSubComponent(subIndex)
          )}`}
        </div>
        <div>${this.makeNestedFields(keyOuter, this.callback)}</div>
        <div>
          ${html`${afterContent.map(subIndex =>
            this.makeSubComponent(subIndex)
          )}`}
        </div>
      `;
    })}`;
  }

  buttonGroup() {
    return this.callback
      ? html`
          <div class="d-grid gap-2 d-md-flex justify-content-md-around p-2">
            <!-- buttons -->

            <!-- <button old submit button
              class="btn btn-primary col-sm-12 col-md-6"
              @click=\${() => this.appUpdate()}
            >
              SUBMIT
            </button> -->

            <submit-button-no-spinner
              class="col-sm-12 col-md-6"
              .appCalc=${this.appUpdate}
            >
            </submit-button-no-spinner>

            <button
              class="btn btn-outline-secondary col"
              @click=${() => this.tileReload()}
            >
              RESET
            </button>

            <!-- <button
              class="btn btn-outline-info col"
              @click=\${() => this.showHelp()} note remove the blackslash and delete this comment to reenable
            >
              HELP
            </button> -->
          </div>
        `
      : html``;
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

  // showHelp() {
  //   // eslint-disable-next-line no-alert
  //   window.alert(this.appConf.helpText);
  // }
}
customElements.define('form-tile-no-spinner', formTileNoSpinner);
