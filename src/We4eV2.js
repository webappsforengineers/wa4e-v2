import { html } from 'lit';
import {StyledElement} from './styles/wa4eStyleElement';
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

export class We4eV2 extends StyledElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = '';
  }

  render() {
    return html`
      <header-element page-title=${this.title}></header-element>
      <div class='container'>
          <menu-tile .appConf=${caissonConf} ></menu-tile>
          </div>
          <div class='col'>
          <menu-tile .appConf=${consolidatedncvConf} ></menu-tile>
          </div>
          <div class='col'>
          <menu-tile .appConf=${draganchorConf} ></menu-tile>
          </div>
          <div class='col'>
          <menu-tile .appConf=${mccsuConf} ></menu-tile>
          </div>
          <div class='col'>
          <menu-tile .appConf=${ncvConf} ></menu-tile>
          </div>
          <div class='col'>
          <menu-tile .appConf=${pinpilesConf} ></menu-tile>
          </div>
          <div class='col'>
          <menu-tile .appConf=${pipeConf} ></menu-tile>
          </div>
          <div class='col'>
          <menu-tile .appConf=${vh2m2tConf} ></menu-tile>
          </div>
          <div class='col'>
          <menu-tile .appConf=${vhmConf} ></menu-tile>
          </div>
          <div class='col'>
          <menu-tile .appConf=${ztiConf} ></menu-tile>
          </div>
        </div>
      </div>
      <footer-element></footer-element>
    `;
  }
}
