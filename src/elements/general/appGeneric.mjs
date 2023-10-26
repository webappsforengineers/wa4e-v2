import { html } from 'lit';
// import { merge, cloneDeep } from 'lodash-es';
import { merge } from 'lodash-es';
import { StyledElement } from '../../styles/wa4eStyleElement.mjs';
import { Masonry } from '../../local_modules/wa4e-math.js';
import '../mySubComponents.mjs';
import '../myElements.mjs';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export class AppGeneric extends StyledElement {
  static get properties() {
    return {
      appWebComponents: { type: Object },
      title: { type: String },
      appName: { type: String },
      output: { type: Object },
      appTiles: { type: html },
      appCalc: { type: Function },
      resetApp: { type: Object },
      masonryLayout: { type: Object },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', () => this.handleResize());
  }

  disconnectedCallback() {
    window.removeEventListener('resize', () => this.handleResize());
    super.disconnectedCallback();
  }

  render() {
    return [
      super.render(),
      html`
        <div class="row">
          <header-element .pageTitle=${this.title}></header-element>
        </div>
        <div class="container-fluid bg-light">
          <div
            id="msnry-tiles"
            class="msnry-tiles row row-cols-sm-1 row-cols-lg-2 row-cols-xxl-3 g-2"
            data-masonry='{"percentPosition": true }'
          >
            ${this.appTiles}
          </div>
        </div>
        <div class="row">
          <footer-element></footer-element>
        </div>
      `,
    ];
  }

  async getMasonryLayout() {
    this.masonryLayout = Masonry.data('.msnry-tiles');
    while (typeof this.masonryLayout === 'undefined') {
      this.masonryLayout = Masonry.data('.msnry-tiles');
      // eslint-disable-next-line no-await-in-loop
      await sleep(2);
    }
  }

  async reloadMasonry() {
    await this.updateComplete;
    await this.getMasonryLayout();
    this.masonryLayout.reloadItems();
  }

  updateComponents() {
    this.output = this.appCalc(this.appWebComponents);
    this.childUpdate();
    this.reloadMasonry().then();
  }

  runCloneCalc(appWebCompClone) {
    this.appCalc(appWebCompClone.appConfClone);
  }

  /* eslint-disable class-methods-use-this */
  resetComponents() {
    // This is a hack
    window.location.reload();
    // this is good and correct but needs working on to make the styling stable
    // this.appWebComponents = cloneDeep(this.resetApp);
    // this.appTiles = this.makeAppTiles();
    // this.childUpdate();
    // this.reloadMasonry().then();
  }
  /* eslint-enable class-methods-use-this */

  // This is called to launch a reload event in any sub-tiles
  childUpdate() {
    const myEvent = new CustomEvent('update-children', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }

  handleResize() {
    this.childUpdate();
    this.updateComplete.then();
    this.reloadMasonry().then();
  }

  modifyForm(appConfChange) {
    merge(this.appWebComponents, appConfChange.changeFields);

    // If we are checking a radio then no new data is added so we disable re-plotting
    const graphTileIndex = Object.values(this.appWebComponents).findIndex(
      element => element.type === 'graph-tile'
    );
    if (graphTileIndex !== -1) {
      this.appWebComponents[graphTileIndex].updateConf.noNewData = true;
      this.appWebComponents[graphTileIndex].updateConf.clearData = true;
      // if we find a graph then we need to check its display value
      Object.keys(this.appWebComponents[graphTileIndex].plots).forEach(key => {
        document.getElementById(`${key}-card`).style.display =
          this.appWebComponents[graphTileIndex].plots[key].display;
      });
    }
    // rerender all the app tiles to get new values
    this.childUpdate();
    this.updateComplete.then();
    this.reloadMasonry().then();
  }

  optimize() {
    this.output = this.appOptimize(this.appWebComponents);
    this.childUpdate();
    this.reloadMasonry().then();
  }

  makeAppTiles() {
    const htmlArray = Object.entries(this.appWebComponents).flatMap(
      ([index, component]) => {
        let componentHtml;
        if (component.type === 'input-tile') {
          componentHtml = html`<div class="col">
            <div class="card p-3">
              <form-tile
                .appConf=${this.appWebComponents[index]}
                .callback=${true}
                @updated="${() => {
                  this.updateComponents();
                }}"
                @reset="${() => {
                  this.resetComponents();
                }}"
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
                @modifyForm="${e => {
                  this.modifyForm(e.detail);
                }}"
                @clear="${() => {
                  this.childUpdate();
                }}"
              ></form-tile>
            </div>
          </div>`;
        } else if (component.type === 'derived-input-tile') {
          componentHtml = html`<div class="col">
            <div class="card p-3">
              <form-tile
                .appConf=${this.appWebComponents[index]}
                .callback=${false}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
              ></form-tile>
            </div>
          </div>`;
        } else if (component.type === 'output-tile') {
          componentHtml = html`<div class="col">
            <div class="card p-3">
              <form-tile
                .appConf=${this.appWebComponents[index]}
                .callback=${false}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
              ></form-tile>
            </div>
          </div>`;
        } else if (component.type === 'coeff-tile') {
          componentHtml = html`<div class="col">
            <div class="card p-3">
              <coeff-tile
                .appConf=${this.appWebComponents[index]}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
              ></coeff-tile>
            </div>
          </div>`;
        } else if (component.type === 'image-tile') {
          componentHtml = html`<div class="col">
            <div class="card p-3">
              <image-tile
                .appConf=${this.appWebComponents[index]}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
              ></image-tile>
            </div>
          </div>`;
        } else if (component.type === 'optimization-tile') {
          componentHtml = html`<div class="col">
            <div class="card p-3">
              <optimization-tile
                .appConf=${this.appWebComponents[index]}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
                @optimize="${e => {
                  this.optimize(e.detail);
                }}"
                @clear="${() => {
                  this.childUpdate();
                }}"
                @modifyForm="${e => {
                  this.modifyForm(e.detail);
                }}"
              ></optimization-tile>
            </div>
          </div>`;
        } else if (component.type === 'text-tile') {
          componentHtml = html`<div class="col">
            <div class="card p-3">
              <text-tile .appConf=${this.appWebComponents[index]}></text-tile>
            </div>
          </div>`;
        } else if (component.type === 'batch-tile') {
          componentHtml = html`<div class="col">
            <div class="card p-3">
              <batch-tile
                @cloneCalc="${e => {
                  this.runCloneCalc(e.detail);
                }}"
                .appConf=${this.appWebComponents}
                .appName=${this.appName}
              ></batch-tile>
            </div>
          </div>`;
        } else if (component.type === 'graph-tile') {
          // The graphs need to be independent to be able to utilise masonry
          // we therefore need to make as many graph-tiles as there are graphs
          // splitting the config to create x graphs increases complexity
          // instead we iterate over the plots here and then provide the
          // component with the key for the plot we want it to render
          componentHtml = Object.keys(component.plots).map(
            plotKey =>
              html` <div class="col">
                <div
                  id="${plotKey}-card"
                  class="card p-3"
                  style="display: ${component.plots[plotKey].display};"
                >
                  <graph-tile
                    .appConf=${this.appWebComponents[index]}
                    .plotKey=${plotKey}
                    @loaded="${() => {
                      this.reloadMasonry();
                    }}"
                  ></graph-tile>
                </div>
              </div>`
          );
        } else if (component.type === 'registration-form') {
          componentHtml = html`<div class="col">
            <div class="card p-3">
              <registration-form></registration-form>
            </div>
          </div>`;
        } else if (component.type === 'login-form') {
          componentHtml = html`<div class="col">
            <div class="card p-3">
              <login-form></login-form>
            </div>
          </div>`;
        }
        // else if (component.type === 'logout-button') {
        //   componentHtml = html`<div class="col">
        //     <div class="card p-3">
        //       <logout-button></logout-button>
        //     </div>
        //   </div>`;
        // }
        else {
          componentHtml = html`<p>
            Component ${component.type} Not Recognised
          </p>`;
        }
        return componentHtml;
      }
    );
    return html`${htmlArray.map(value => value)}`;
  }
}
