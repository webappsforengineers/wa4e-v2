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
    this.title = appConf.appPageTitle
    this.grid = appConf.appGrid
    this.appTiles = html`<input-tile .appConf=${appConf.appWebComponents[0]}></input-tile>`
  }

  render() {
    return html`
      <header-element page-title=${this.title}></header-element>
      <div class='grid_container' style=''>
      ${this.appTiles}
      </div>
      <footer-element></footer-element>
    `;
  }
}

customElements.define(`${appConf.appName}-app`, App)
