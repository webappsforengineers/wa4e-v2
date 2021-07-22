import { html } from 'lit';
import { StyledElement } from './styles/wa4eStyleElement';
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
  ztiConf,
} from './app_modules/moduleConf.js';

export class Wa4eV2 extends StyledElement {
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
    return [
      super.render(),
      html`
        <div class="row">
          <header-element page-title=${this.title}></header-element>
        </div>
        <div class="msnry-tiles row p-3 align-content-center"
             data-masonry='{"percentPosition": true }'>
          <div class="col-sm-6 col-lg-3" style='height: 350px; width: 350px'>
            <menu-tile .appConf=${caissonConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style='height: 350px; width: 350px'>
            <menu-tile .appConf=${consolidatedncvConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style='height: 350px; width: 350px'>
            <menu-tile .appConf=${draganchorConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style='height: 350px; width: 350px'>
            <menu-tile .appConf=${mccsuConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style='height: 350px; width: 350px'>
            <menu-tile .appConf=${ncvConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style='height: 350px; width: 350px'>
            <menu-tile .appConf=${pinpilesConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style='height: 350px; width: 350px'>
            <menu-tile .appConf=${pipeConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style='height: 350px; width: 350px'>
            <menu-tile .appConf=${vh2m2tConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style='height: 350px; width: 350px'>
            <menu-tile .appConf=${vhmConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3 mb-1" style='height: 350px; width: 350px'>
            <menu-tile .appConf=${ztiConf}></menu-tile>
          </div>
        </div>
        <div class="row gy-1">
          <footer-element></footer-element>
        </div>

      `,
    ];
  }
}
