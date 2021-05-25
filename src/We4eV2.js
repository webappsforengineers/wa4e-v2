import { LitElement, html} from 'lit';
import { we4eStyles } from './styles/we4eStyles.js';
import './elements/myElements.js';
// get the configuration files for each app
import {
  caissonConf,
  consolidatedncvConf,
  draganchorConf,
  mccsuConf,
  ncvConf,
  pinpilesConf,
  pipeConf,
  vh2m2tConf,
  vhmConf,
  ztiConf
} from './app_modules/moduleConf.js';

export class We4eV2 extends LitElement {
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
    this.title = '';
  }

  render() {
    return html`
      <header-element page-title=${this.title}></header-element>
      <div class='main-menu-card-container'>
        <menu-tile .appConf=${caissonConf} ></menu-tile>
        <menu-tile .appConf=${consolidatedncvConf} ></menu-tile>
        <menu-tile .appConf=${draganchorConf} ></menu-tile>
        <menu-tile .appConf=${mccsuConf} ></menu-tile>
        <menu-tile .appConf=${ncvConf} ></menu-tile>
        <menu-tile .appConf=${pinpilesConf} ></menu-tile>
        <menu-tile .appConf=${pipeConf} ></menu-tile>
        <menu-tile .appConf=${vh2m2tConf} ></menu-tile>
        <menu-tile .appConf=${vhmConf} ></menu-tile>
        <menu-tile .appConf=${ztiConf} ></menu-tile>
      </div>
      <footer-element></footer-element>
    `;
  }
}
