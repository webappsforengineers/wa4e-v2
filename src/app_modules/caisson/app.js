import { html, } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement';
import { caissonConf as appConf } from '../moduleConf.js';
import { calculateCaisson as appCalc } from '../../../../wa4e-v2-maths/output/wa4e-math.js';
import '../../elements/myElements.js';

export class App extends StyledElement {
  static get properties() {
    return {
      appWebComponents: { type: Object },
      title: { type: String },
      output: { type: Object },
      appTiles: { type: html },
    };
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
      <div id="tiles" class="grid-container" style='--xtot: ${this.grid.x}' >
      ${this.appTiles}
      </div>
      <footer-element></footer-element>
    `;
  }

  updateComponents() {
    this.output = appCalc(
      this.appWebComponents.find(element => element.type === 'input-tile'),
      0,
      0
    );
    // ToDo: these loops take an object from the math output and map it to a tiles fields, these could be functions.
    /* eslint-disable no-restricted-syntax */
    for (const [key, value] of Object.entries(this.output.derivedInputs)) {
      this.appWebComponents.find(
        element => element.type === 'derived-input-tile'
      ).fields[key][0] = value;
    }
    for (const [keyOuter, valueOuter] of Object.entries(this.output.outputs)) {
      for (const [keyInner, valueInner] of Object.entries(valueOuter)) {
        this.appWebComponents.find(
          element => element.type === 'output-tile'
        ).fields[keyOuter][keyInner][0] = valueInner;
      }
    }
    for (const [key, value] of Object.entries(this.output.graphData)) {
      this.appWebComponents.find(
        element => element.type === 'graph-tile'
      ).fields[key] = value;
    }
    /* eslint-enable no-restricted-syntax */
    // Launch new event to update child components
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
    return html`
      ${this.appWebComponents.map(
        (component, index) =>
          html`
            ${component.type === 'input-tile'
              ? html`<input-tile
                  class="grid-item app-card"
                  style="--xstart: ${component.gridPosition.xStart};
                         --ystart: ${component.gridPosition.yStart};
                         --xend: ${component.gridPosition.xEnd};
                         --yend: ${component.gridPosition.yEnd};"
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
                  class="grid-item app-card"
                  style="--xstart: ${component.gridPosition.xStart};
                         --ystart: ${component.gridPosition.yStart};
                         --xend: ${component.gridPosition.xEnd};
                         --yend: ${component.gridPosition.yEnd};"
                  .appConf=${this.appWebComponents[index]}
                ></derived-input-tile>`
              : component.type === 'output-tile'
              ? html`<output-tile
                  class="grid-item app-card"
                  style="--xstart: ${component.gridPosition.xStart};
                         --ystart: ${component.gridPosition.yStart};
                         --xend: ${component.gridPosition.xEnd};
                         --yend: ${component.gridPosition.yEnd};"
                  .appConf=${this.appWebComponents[index]}
                ></output-tile>`
              : component.type === 'image-tile'
              ? html`<image-tile
                  class="grid-item app-card"
                  style="--xstart: ${component.gridPosition.xStart};
                         --ystart: ${component.gridPosition.yStart};
                         --xend: ${component.gridPosition.xEnd};
                         --yend: ${component.gridPosition.yEnd};"
                  .appConf=${this.appWebComponents[index]}
                ></image-tile>`
              : component.type === 'graph-tile'
              ? html`<graph-tile
                  class="nested-grid-item"
                  style="--xstart: ${component.gridPosition.xStart};
                         --ystart: ${component.gridPosition.yStart};
                         --xend: ${component.gridPosition.xEnd};
                         --yend: ${component.gridPosition.yEnd};"
                  .appConf=${this.appWebComponents[index]}
                ></graph-tile>`
              : component.type === 'coeff-tile'
              ? html`<coeff-tile
                  class="grid-item app-card"
                  style="--xstart: ${component.gridPosition.xStart};
                         --ystart: ${component.gridPosition.yStart};
                         --xend: ${component.gridPosition.xEnd};
                         --yend: ${component.gridPosition.yEnd};"
                  .appConf=${this.appWebComponents[index]}
                ></coeff-tile>`
              : component.type === 'optimisation-tile'
              ? html`<optimisation-tile
                  class="grid-item app-card"
                  style="--xstart: ${component.gridPosition.xStart};
                         --ystart: ${component.gridPosition.yStart};
                         --xend: ${component.gridPosition.xEnd};
                         --yend: ${component.gridPosition.yEnd};"
                  .appConf=${this.appWebComponents[index]}
                ></optimisation-tile>`
              : html`<p>Component ${component.type} Not Recognised</p>`}
          `
      )}
    `;
  }
  /* eslint-enable no-nested-ternary */
}

customElements.define(`${appConf.appName}-app`, App);
