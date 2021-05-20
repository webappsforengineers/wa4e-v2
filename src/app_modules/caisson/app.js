import { LitElement, html} from 'lit-element';
import { we4eStyles, we4eGrids} from '../../styles/we4e-styles.js';
import {caissonConf as appConf} from '../moduleConf.js';
import '../../elements/myElements.js';

export class App extends LitElement {
  static get properties() {
    return {
      title: { type: String },
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
    this.appTiles =
      html`${appConf.appWebComponents.map((component) =>
        html`
          ${
          component.type==="input-tile"?
            html`<input-tile .appConf="${component}"></input-tile>`:
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
  }

  render() {
    return html`
      <header-element page-title=${this.title}></header-element>
      <div class='grid_container' style='--x:${this.grid.x};--y:${this.grid.y};'>
      ${this.appTiles}
      </div>
      <footer-element></footer-element>
    `;
  }
}

customElements.define(`${appConf.appName}-app`, App)
