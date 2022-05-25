import { S as e, p as t } from './68f74eba.js';
import { a as i } from './27875585.js';
import { a as o } from './04d01c1d.js';
import { a as s } from './25798956.js';
import { a as l } from './deccfd8f.js';
import { a } from './d1437ee2.js';
import { a as n } from './a2e1c17f.js';
import { a as c } from './ff59e775.js';
import { a as r } from './4fffd734.js';
import { a as m } from './65f25f2f.js';
import { a as d } from './48f7c2c3.js';
import { a as p } from './65db936e.js';
class f extends e {
  static get properties() {
    return { title: { type: String } };
  }
  constructor() {
    super(), (this.title = '');
  }
  render() {
    return [
      super.render(),
      t`
        <div class="row">
          <header-element page-title="${this.title}"></header-element>
        </div>
        <div
          class="container align-items-center justify-content-center"
          style="align-items: center; justify-content: center"
        >
          <div class="row">
            <div class="col-12">
              <h4 style="color: red" align="justify">
                WebAppsForEngineers V2 is in beta, the app has been
                reimplemented to modernise the app framework. The new batch
                tiles are due to be tested. For general use we suggest using the
                original site found
                <a href="https://webappsforengineers.com/index.html">here</a>.
              </h4>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h1 align="center">
                Freeware web-based calculation tools for geotechnical engineers
              </h1>
            </div>
            <div class="col-12">
              <p align="justify">
                Webappsforengineers are freely available online geotechnical
                engineering calculation tools based on published research and
                developed for research dissemination and teaching. The apps
                enable users to engage with published methods and frameworks
                immediately, allowing initial sizing calculations to be
                performed and exploration of the sensitivity of design inputs
                (e.g. geotechnical properties and loads) on design outputs (e.g.
                foundation or anchor geometry and resistance). In some cases
                geometry of the structure is an input, although a key value of
                many of the automated calculation tools presented in these apps
                is the ability to change the design question from ‘is the factor
                of safety for this foundation sufficient?’ to ‘what is the
                minimum geometry of the foundation to ensure the required factor
                of safety?’. The latter is arguably the more useful design
                question and the optimization routines in those tools applying a
                failure envelope methodology, enable automated iteration to
                determine the optimized geometry.
              </p>
            </div>
          </div>

          <div class="row" data-masonry='{"percentPosition": true }'>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${a}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${d}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${o}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${n}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${p}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${m}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${r}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${l}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${i}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${s}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${c}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <div
                class="card w-auto text-center text-wrap justify-content-center align-items-center p-3"
                style="background-color: #f492e3; aspect-ratio: 0.8;"
              >
                <img
                  class="card-img-top img-fluid"
                  style="width: 90%; height: 150px; object-fit: scale-down;"
                  src="img/geocalc.png"
                  alt="Geocalcs icon"
                />
                <div class="card-body justify-content-center">
                  <h5 class="card-title">Pile Analysis, Datamap & more</h5>
                  <p class="card-text">Links to external site</p>
                  <a
                    href="https://www.geocalcs.com/"
                    class="stretched-link"
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="row gy-1">
            <footer-element></footer-element>
          </div>
        </div>
      `,
    ];
  }
}
customElements.define('wa4e-v2', f);
export { f as Wa4eV2 };
