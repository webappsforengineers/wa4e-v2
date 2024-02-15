import { html } from 'lit';
import { StyledElement } from '../styles/wa4eStyleElement.mjs';
import '../elements/myElements.mjs';
// get the configuration files for each app
import {
  caissonConf,
  consolidatedncvConf,
  dragAnchorConf,
  ggsandnetConf,
  mccsuConf,
  ncvConf,
  pinpilesConf,
  pipeConf,
  spletConf,
  vh2m2tConf,
  vhmConf,
  ztiConf,
} from '../app_modules/moduleConf.mjs';

/* eslint-disable lit-a11y/anchor-has-content */

export class menuPage extends StyledElement {
  static get properties() {
    return {
      title: { type: String },
      currentUser: {},
    };
  }

  constructor() {
    super();
    this.title = '';
    this.currentUser = '';
  }

  render() {
    window.onload = this.viewCurrentUser();
    let adminTile;
    if (localStorage.getItem('user_type') === 'admin user') {
      adminTile = html`
        <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
          <div
            class="card w-auto text-center text-wrap justify-content-center align-items-center p-3"
            style="background-color: #e1e8ec; aspect-ratio: 0.8;"
          >
            <img
              class="card-img-top img-fluid"
              style="width: 90%; height: 150px; object-fit: scale-down;"
              src="../img/admin.png"
              alt="Admin icon"
            />
            <div class="card-body justify-content-center">
              <h5 class="card-title">Admin</h5>
              <p class="card-text">View, select, and delete users</p>
              <a href="../adminPage/index.html" class="stretched-link"></a>
            </div>
          </div>
        </div>
      `;
    }

    let mainContent;
    if (
      localStorage.getItem('user_type') === 'admin user' ||
      localStorage.getItem('user_type') === 'regular user'
    ) {
      mainContent = html`
        <button
          class="btn float-end"
          style="background-color: #c1d100; color: #00557f"
          @click=${this.submitLogout}
        >
          Logout
        </button>
        <br />
        <br />
        <div class="row" data-masonry='{"percentPosition": true }'>
          ${adminTile}
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <menu-tile .appConf="${ncvConf}"></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <menu-tile .appConf="${vhmConf}"></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <menu-tile .appConf="${consolidatedncvConf}"></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <menu-tile .appConf="${pinpilesConf}"></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <menu-tile .appConf="${ztiConf}"></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <menu-tile .appConf="${vh2m2tConf}"></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <menu-tile .appConf="${spletConf}"></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <menu-tile .appConf="${mccsuConf}"></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <menu-tile .appConf="${caissonConf}"></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <menu-tile .appConf="${dragAnchorConf}"></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <menu-tile .appConf="${pipeConf}"></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <menu-tile .appConf="${ggsandnetConf}"></menu-tile>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <div
              class="card w-auto text-center text-wrap justify-content-center align-items-center p-3"
              style="background-color: #e1e8ec; aspect-ratio: 0.8;"
            >
              <img
                class="card-img-top img-fluid"
                style="width: 90%; height: 150px; object-fit: scale-down;"
                src="../img/geocalc.png"
                alt="Geocalcs icon"
              />
              <div class="card-body justify-content-center">
                <h5 class="card-title">Pile Analysis, Datamap & more</h5>
                <p class="card-text">Links to external site</p>
                <a
                  href="https://www.geocalcs.com/"
                  class="stretched-link"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <!-- <div class="col-sm-6 col-lg-4 col-xl-2 mb-4"> -->
            <div
              class="card w-auto text-center text-wrap justify-content-center align-items-center p-3"
              style="background-color: #e1e8ec; aspect-ratio: 0.8;"
            >
              <img
                class="card-img-top img-fluid"
                style="width: 90%; height: 150px; object-fit: scale-down;"
                src="../img/storymaps.png"
                alt="Story maps icon"
              />
              <div class="card-body justify-content-center">
                <h5 class="card-title">GIS for Offshore Wind</h5>
                <p class="card-text">
                  Constraints and availability maps for future OW in UK waters -
                  Links to external site
                </p>
                <a
                  href="https://storymaps.arcgis.com/collections/3c485282571142f28de577b957a0b348"
                  class="stretched-link"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-2 mb-4">
            <div
              class="card w-auto text-center text-wrap justify-content-center align-items-center p-3"
              style="background-color: #e1e8ec; aspect-ratio: 0.8;"
            >
              <img
                class="card-img-top img-fluid"
                style="width: 90%; height: 150px; object-fit: scale-down;"
                src="../img/abc.jpeg"
                alt="ABC icon"
              />
              <div class="card-body justify-content-center">
                <h5 class="card-title">ABC - Analysis of Bearing Capacity</h5>
                <p class="card-text">Links to external site</p>
                <a
                  href="https://www.dropbox.com/sh/qw09xxkn1tqeqd0/AACYYHdPD-0Z2sjBwPNTs0_4a?dl=0"
                  class="stretched-link"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      mainContent = html`
        <p class="text-light">To use WebAppsForEngineers please login</p>
        <a href="../index.html">
          <button class="btn" style="background-color: #c1d100; color: #00557f">
            Go to Login Page
          </button>
        </a>
      `;
    }

    return [
      super.render(),
      html`
        <div style="background-color: #00557f; height: auto; min-height: 100vh">
          <!-- <img class="bg obj-fit-cover" src="../img/sea2.png" alt="sea"> -->
          <div class="row">
            <header-element page-title="${this.title}"></header-element>
          </div>
          <div
            class="container-fluid align-items-center justify-content-center"
            style="align-items: center; justify-content: center"
          >
            <div class="row text-light">
              <h3>
                Hello ${this.currentUser}, welcome to WebAppsForEngineers!
              </h3>
              <!-- <div class="col-12">
              <img 
                src="../img/wind_turbine.png" 
                class="img-fluid"
                alt="wind turbine"
              >
              </div> -->
              <!-- <div class="col-md-6">
              <img 
                src="../img/ship.png" 
                class="img-fluid"
                alt="ship"
              >
              </div> -->

              <!-- <h4 style="color: red" align="justify">
                WebAppsForEngineers V2 is in beta, the app has been
                reimplemented to modernise the app framework. For general use we
                suggest using the original site found
                <a
                  href="https://webappsforengineers.com/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  >here</a
                >.
              </h4> -->
            </div>
            <div class="row text-light">
              <div class="col-12">
                <h3 align="center">
                  Freeware web-based calculation tools for geotechnical
                  engineers
                </h3>
              </div>
              <div class="col-12">
                <p align="justify">
                  WebAppsForEngineers are freely available online geotechnical
                  engineering calculation tools based on published research and
                  developed for research dissemination and teaching. The apps
                  enable users to engage with published methods and frameworks
                  immediately, allowing initial sizing calculations to be
                  performed and exploration of the sensitivity of design inputs
                  (e.g. geotechnical properties and loads) on design outputs
                  (e.g. foundation or anchor geometry and resistance). In some
                  cases geometry of the structure is an input, although a key
                  value of many of the automated calculation tools presented in
                  these apps is the ability to change the design question from
                  ‘is the factor of safety for this foundation sufficient?’ to
                  ‘what is the minimum geometry of the foundation to ensure the
                  required factor of safety?’. The latter is arguably the more
                  useful design question and the optimization routines in those
                  tools applying a failure envelope methodology, enable
                  automated iteration to determine the optimized geometry.
                </p>
              </div>
            </div>

            ${mainContent}

            <div class="row gy-1">
              <footer-light-element></footer-light-element>
            </div>
          </div>
        </div>
      `,
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  submitLogout() {
    fetch('http://localhost:8080/api/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('authToken')}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        window.console.log(json);
        localStorage.setItem('authToken', null);
        localStorage.setItem('user_type', null);
        window.location.href = '../index.html';
      });
  }

  viewCurrentUser() {
    // const authHeader = this.loginUserInfo.authToken;
    // window.console.log(authHeader);

    fetch('http://localhost:8080/api/current-user/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('authToken')}`,
        // Authorization: `Token ${this.loginUserInfo.authToken}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        window.console.log(json);
        this.currentUser = json.username;
      });
  }
}

customElements.define('menu-page', menuPage);