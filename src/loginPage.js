/* eslint-disable import/named */
import { html } from 'lit';
import { StyledElement } from './styles/wa4eStyleElement.mjs';
import './elements/myElements.mjs';

export class loginPage extends StyledElement {
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
        <div style="background-color: #00557f; height: auto; min-height: 100vh">
          <div class="row">
            <header-element page-title="${this.title}"></header-element>
          </div>
          <div
            class="container align-items-center justify-content-center"
            style="align-items: center; justify-content: center"
          >
            <div class="row">
              <!-- <div class="col-12"> -->
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
              <!-- </div> -->
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
                  Webappsforengineers are freely available online geotechnical
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

            <login-form></login-form>
            <p class="text-light">OR</p>
            <p class="text-light">
              If you are a new user please register for an account
            </p>
            <a
              href="register/index.html"
              class="btn"
              style="background-color: #c1d100; color: #00557f"
            >
              Register
            </a>

            <div>
              <footer-light-element></footer-light-element>
            </div>
          </div>
        </div>
      `,
    ];
  }
}

customElements.define('login-page', loginPage);
