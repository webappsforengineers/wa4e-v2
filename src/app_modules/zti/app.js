import {  html } from 'lit';
import {StyledElement} from '../../styles/wa4eStyleElement';

import { ztiConf as appConf} from '../moduleConf.js';
import '../../elements/myElements.js';

export class App extends StyledElement {
  static get properties() {
    return {
      title: { type: String },
    };
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
