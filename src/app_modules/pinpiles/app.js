import { LitElement, html } from 'lit';
import { we4eStyles} from '../../styles/we4eStyles.js';
import { pinpilesConf as appConf} from '../moduleConf.js';
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
    ]
  }

  constructor() {
    super();
    this.title = appConf.appPageTitle
  }

  render() {
    return html`
      <header-element page-title=${this.title}></header-element>
      <footer-element></footer-element>
    `;
  }
}

customElements.define(`${appConf.appName}-app`, App)
