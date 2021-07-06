import { html, LitElement } from 'lit';
import { we4eGrids, we4eStyles } from '../../styles/we4eStyles.js';
import { caissonConf as appConf } from '../moduleConf.js';
import { calculateCaisson as appCalc } from '../../../../wa4e-v2-maths/output/wa4e-math.js';
import '../../elements/myElements.js';

export class App extends LitElement {
  static get properties() {
    return {
      appWebComponents: {
        type: Object,
      },
      title: { type: String },
      output: { type: Object },
      appTiles: {
        type: html,
      },
    };
  }

  static get styles() {
    return [we4eStyles, we4eGrids];
  }

  constructor() {
    super();
    this.title = appConf.appPageTitle;
    this.grid = appConf.appGrid;
    this.devMessage = '';
    this.appWebComponents = appConf.appWebComponents;
    this.output = {};
    this.appTiles = this.makeAppTiles();
  }

  render() {
    return html`
      <header-element page-title=${this.title}></header-element>
      ${this.appTiles}
      <footer-element></footer-element>
    `;
  }

  updateComponents() {
    this.output = appCalc(
      this.appWebComponents.find(element => element.type === 'input-tile'),
      0,
      0
    );
    for (const [key, value] of Object.entries(this.output.derivedInputs)) {
      this.appWebComponents.find(
        element => element.type === 'derived-input-tile'
      ).fields[key][0] = value;
    }
    this.childUpdate();
  }

  resetComponents() {
    this.appWebComponents = appConf.appWebComponents;
    this.childUpdate();
  }

  childUpdate() {
    const myEvent = new CustomEvent('update-children', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }

  /* eslint-disable no-nested-ternary */
  makeAppTiles() {
    return html`${this.appWebComponents.map(
      (component, index) =>
        html` <div
          id="tiles"
          class="grid_container"
          style="--x:${this.grid.x};--y:${this.grid.y};"
        >
          ${component.type === 'input-tile'
            ? html`<input-tile
                .appConf=${this.appWebComponents[index]}
                @updated="${() => {
                  this.updateComponents();
                }}"
                @reset="${() => {
                  this.resetComponents();
                }}"
              ></input-tile>`
            : component.type === 'derived-input-tile'
            ? html`<derived-input-tile
                id="derived-input-tile"
                .appConf=${this.appWebComponents[index]}
              ></derived-input-tile>`
            : component.type === 'output-tile'
            ? html`<output-tile
                .appConf=${this.appWebComponents[index]}
              ></output-tile>`
            : component.type === 'image-tile'
            ? html`<image-tile
                .appConf=${this.appWebComponents[index]}
              ></image-tile>`
            : component.type === 'graph-tile'
            ? html`<graph-tile
                .appConf=${this.appWebComponents[index]}
              ></graph-tile>`
            : component.type === 'coeff-tile'
            ? html`<graph-tile
                .appConf=${this.appWebComponents[index]}
              ></graph-tile>`
            : component.type === 'optimisation-tile'
            ? html`<graph-tile
                .appConf=${this.appWebComponents[index]}
              ></graph-tile>`
            : html`<p>Component ${component.type} Not Recognised</p>`}
        </div>`
    )}`;
  }
  /* eslint-enable no-nested-ternary */
}

customElements.define(`${appConf.appName}-app`, App);
