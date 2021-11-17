import { S as e, p as t } from './a37c4663.js';
import { a as i } from './8d54de41.js';
import { a as o } from './70179364.js';
import { a as s } from './cc4a78b6.js';
import { a as l } from './cfb26dd6.js';
import { a } from './1428c1ff.js';
import { a as n } from './6432928c.js';
import { a as c } from './470d2e29.js';
import { a as r } from './70e590c1.js';
import { a as m } from './b5c4b27d.js';
import { a as d } from './4cf8a1b6.js';
import { a as p } from './362949b9.js';
let u,
  f = e => e;
class g extends e {
  static get properties() {
    return { title: { type: String } };
  }
  constructor() {
    super(), (this.title = '');
  }
  render() {
    return [
      super.render(),
      t(
        u ||
          (u = f`
        <div class="row">
          <header-element page-title="${0}"></header-element>
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
              <menu-tile .appConf="${0}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${0}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${0}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${0}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${0}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${0}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${0}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${0}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${0}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${0}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <menu-tile .appConf="${0}"></menu-tile>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <div
                class="card w-auto text-center text-wrap justify-content-center align-items-center p-3"
                style="background-color: #f492e3; aspect-ratio: 0.61;"
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
      `),
        this.title,
        a,
        d,
        o,
        n,
        p,
        m,
        r,
        l,
        i,
        s,
        c
      ),
    ];
  }
}
customElements.define('wa4e-v2', g);
export { g as Wa4eV2 };
