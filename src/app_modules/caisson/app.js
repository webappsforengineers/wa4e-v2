import { LitElement, html } from 'lit';
import { we4eStyles, we4eGrids} from '../../styles/we4eStyles.js';
import {caissonConf as appConf} from '../moduleConf.js';
import {calculateCaisson as appCalc} from '../../../../wa4e-v2-maths/output/wa4e-math.js';
import '../../elements/myElements.js';

export class App extends LitElement {
  static get properties() {
    return {
      appWebComponents: { type: Object},
      title: { type: String },
      devMessage: {type: String},
      output: {type: Object}
    };
  }

  static get styles() {
    return [
      we4eStyles,
      we4eGrids
    ]
  }

  constructor() {
    super();
    this.title = appConf.appPageTitle;
    this.grid = appConf.appGrid;
    this.appHTML = html``;
    this.devMessage = "";
    this.appWebComponents = appConf.appWebComponents;
    this.output = {};
  }

  render() {
    this.appTiles =
      html`${this.appWebComponents.map((component) =>
        html`
        ${component.type==="input-tile"?
            html`<input-tile .appConf="${component}" @updated='${(e) => { this.devMessage = e.detail.message; this.updateComponents() }}'></input-tile>`:
          component.type==="derived-input-tile"?
            html`<derived-input-tile .appConf="${component}"></derived-input-tile>`:
          component.type==="output-tile"?
            html`<output-tile .appConf="${component}"></output-tile>`:
          component.type==="image-tile"?
            html`<image-tile .appConf="${component}"></image-tile>`:
          component.type==="graph-tile"?
            html`<graph-tile .appConf="${component}"></graph-tile>`:
          component.type==="coeff-tile"?
            html`<graph-tile .appConf="${component}"></graph-tile>`:
          component.type==="optimisation-tile"?
            html`<graph-tile .appConf="${component}"></graph-tile>`:
          html`<p>Component ${component.type} Not Recognised</p>`
        }`
      )}`;

    this.appHTML = html`
      <header-element page-title=${this.title}></header-element>
      <div class='grid_container' style='--x:${this.grid.x};--y:${this.grid.y};'>
      ${this.appTiles}
      </div>
      <p>${this.devMessage}</p>
      <footer-element></footer-element>
    `;

    return this.appHTML;
  }

  updateComponents() {
    this.output = appCalc(this.appWebComponents.find(element => element.type === 'input-tile'), 0, 0);
    for (const [key, value] of Object.entries(this.output.derivedInputs)) {
      this.appWebComponents.find(element => element.type === 'derived-input-tile').fields[key][0] = value;
    }
    this.devMessage = "Output Generated";
  }

}

customElements.define(`${appConf.appName}-app`, App)


