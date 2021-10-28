import { html } from 'lit';
import { StyledElement } from './styles/wa4eStyleElement.js';
import './elements/myElements.js';
// get the configuration files for each app
import {
  caissonConf,
  consolidatedncvConf,
  dragAnchorConf,
  mccsuConf,
  ncvConf,
  pinpilesConf,
  pipeConf,
  spletConf,
  vh2m2tConf,
  vhmConf,
  ztiConf,
} from './app_modules/moduleConf.js';

/* eslint-disable lit-a11y/anchor-has-content */

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
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <h1>
              Freeware web-based calculation tools for geotechnical engineers
            </h1>
          </div>
          <div class="col-1"></div>
          <div class="col-1"></div>
          <div class="col-10">
            <p>
              Webappsforengineers are freely available online geotechnical
              engineering calculation tools based on published research and
              developed for research dissemination and teaching. The apps enable
              users to engage with published methods and frameworks immediately,
              allowing initial sizing calculations to be performed and
              exploration of the sensitivity of design inputs (e.g. geotechnical
              properties and loads) on design outputs (e.g. foundation or anchor
              geometry and resistance). In some cases geometry of the structure
              is an input, although a key value of many of the automated
              calculation tools presented in these apps is the ability to change
              the design question from ‘is the factor of safety for this
              foundation sufficient?’ to ‘what is the minimum geometry of the
              foundation to ensure the required factor of safety?’. The latter
              is arguably the more useful design question and the optimization
              routines in those tools applying a failure envelope methodology,
              enable automated iteration to determine the optimized geometry.
            </p>
          </div>
          <div class="col-1"></div>
        </div>
        <div
          class="msnry-tiles row p-3 align-content-center"
          data-masonry='{"percentPosition": true }'
        >
          <div class="col-sm-6 col-lg-3" style="height: 350px; width: 350px">
            <menu-tile .appConf=${ncvConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style="height: 350px; width: 350px">
            <menu-tile .appConf=${vhmConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style="height: 350px; width: 350px">
            <menu-tile .appConf=${consolidatedncvConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style="height: 350px; width: 350px">
            <menu-tile .appConf=${pinpilesConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style="height: 350px; width: 350px">
            <menu-tile .appConf=${ztiConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style="height: 350px; width: 350px">
            <menu-tile .appConf=${vh2m2tConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style="height: 350px; width: 350px">
            <menu-tile .appConf=${spletConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style="height: 350px; width: 350px">
            <menu-tile .appConf=${mccsuConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style="height: 350px; width: 350px">
            <menu-tile .appConf=${caissonConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style="height: 350px; width: 350px">
            <menu-tile .appConf=${dragAnchorConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style="height: 350px; width: 350px">
            <menu-tile .appConf=${pipeConf}></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-3" style="height: 350px; width: 350px">
            <div
              class="card text-center text-wrap align-items-center p-3"
              style="height: 325px; width: 325px; background-color: #f492e3;"
            >
              <img
                class="card-img-top"
                style="max-width: 150px; max-height: 150px;"
                src="../public/img/geocalc.png"
                alt="Geocalcs icon"
              />
              <div class="card-body">
                <h5 class="card-title">Pile Analysis, Datamap & more</h5>
                <p class="card-text">Links to external site</p>
                <a href="https://www.geocalcs.com/" class="stretched-link"></a>
              </div>
            </div>
          </div>
        </div>
        <div class="row gy-1">
          <footer-element></footer-element>
        </div>
      `,
    ];
  }
}

customElements.define('wa4e-v2', Wa4eV2);
