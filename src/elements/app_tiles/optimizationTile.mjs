import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { TileBase } from './tileBase.mjs';

class optimizationTile extends TileBase {
  render() {
    this.checkOptions = this.appConf.options;
    this.formFields = this.appConf.fields;
    this.subComponents = this.appConf.subComponents;
    this.outputFields = this.arrangeFields();
    return [
      super.render(),
      html`
        <h2>${unsafeHTML(this.appConf.title)}</h2>
        <p>${this.outputFields}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-around p-2">
          <!-- buttons -->
          <button
            class="btn col-sm-12 col-md-6"
            style="background-color: #c1d100; color: #00557f"
            @click=${() => this.appOptimize()}
          >
            OPTIMIZE
          </button>
        </div>
      `,
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('clear', () => this.requestUpdate());
  }

  disconnectedCallback() {
    window.removeEventListener('clear', () => this.requestUpdate());
    super.disconnectedCallback();
  }

  appOptimize() {
    const myEvent = new CustomEvent('optimize', {
      bubbles: true,
      composed: true,
    });
    this.clearOutput();
    this.dispatchEvent(myEvent);
  }

  clearOutput() {
    for (const thing of Object.values(this.formFields[''])) {
      if (thing.label === 'Solution') {
        thing.value = null;
      }
    }
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
        <div>${this.makeNestedFields(keyOuter, true)}</div>
        <div>
          ${html`${afterContent.map(subIndex =>
            this.makeSubComponent(subIndex)
          )}`}
        </div>
      `;
    })}`;
  }
}

customElements.define(`optimization-tile`, optimizationTile);
