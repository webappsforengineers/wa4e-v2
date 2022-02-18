import { html } from 'lit';
import { TileBase } from './tileBase.js';

class optimizationTile extends TileBase {
  render() {
    this.checkOptions = this.appConf.options;
    this.formFields = this.appConf.fields;
    this.subComponents = this.appConf.subComponents;
    this.outputFields = this.arrangeFields();
    return [
      super.render(),
      html`
        <h2>${html([this.appConf.title])}</h2>
        <p>${this.outputFields}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-around p-2">
          <!-- buttons -->
          <button
            class="btn btn-primary col-sm-12 col-md-6"
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
    this.formFields[''].solution[0] = null;
    // this.formFields[''].solution_beta_pV[0] = null;
    // this.formFields[''].solution_beta_pH[0] = null;
    // this.formFields[''].solution_beta_pM[0] = null;
  }

  arrangeFields() {
    return html`${Object.keys(this.formFields).map((keyOuter, index) => {
      /* const subComponent = this.subComponents.find(
        element => element.index === index
      ); */
      const [beforeTitle, afterTitle, afterContent] = this.getSubComponents(
        this.subComponents,
        index
      );

      /* eslint-disable no-nested-ternary */
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

customElements.define(`optimization-tile`, optimizationTile);
