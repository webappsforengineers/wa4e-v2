import { html } from 'lit';
import { lodash } from 'lodash-es';
import { StyledElement } from '../../styles/wa4eStyleElement';
import { Masonry } from '../../local_modules/wa4e-math.js';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export class AppGeneric extends StyledElement {
  static get properties() {
    return {
      appWebComponents: { type: Object },
      title: { type: String },
      output: { type: Object },
      appTiles: { type: html },
      appCalc: { type: Function },
      resetApp: { type: Object },
      masonryLayout: { type: Object },
    };
  }

  render() {
    return [
      super.render(),
      html`
        <div class="row">
          <header-element page-title=${this.title}></header-element>
        </div>
        <div class="container-fluid bg-light">
          <div class="container bg-light">
            <div
              id="msnry-tiles"
              class="msnry-tiles row"
              data-masonry='{"percentPosition": true }'
            >
              ${this.appTiles}
            </div>
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
    await this.getMasonryLayout();
    this.masonryLayout.reloadItems();
  }

  updateComponents() {
    this.output = this.appCalc(this.appWebComponents);
    // TODO: delete this in favour of doing this in the math files
    // ~~ToDo: these loops take an object from the math output and map it to a tiles fields, these could be functions.~~
    /* eslint-disable no-restricted-syntax */
    /*
    for (const [key, value] of Object.entries(this.output.derivedInputs)) {
      this.appWebComponents.find(
        element => element.type === 'derived-input-tile'
      ).fields[key][0] = value;
    }
    for (const [keyOuter, valueOuter] of Object.entries(this.output.outputs)) {
      for (const [keyInner, valueInner] of Object.entries(valueOuter)) {
        this.appWebComponents.find(
          element => element.type === 'output-tile'
        ).fields[keyOuter][keyInner][0] = valueInner;
      }
    }
    for (const [key, value] of Object.entries(this.output.graphData)) {
      this.appWebComponents.find(
        element => element.type === 'graph-tile'
      ).fields[key] = value;
    }
    */
    /* eslint-enable no-restricted-syntax */
    // Launch new event to update child components
    this.childUpdate();
  }

  // eslint-disable-next-line class-methods-use-this
  resetComponents() {
    // TODO: Fix this
  }

  childUpdate() {
    const myEvent = new CustomEvent('update-children', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }

  modifyForm(appConfChange) {
    // Function to recursively find the paths to each attribute that is being changed
    /* eslint-disable no-restricted-syntax */
    function getKeys(obj, keys, ...passedKey) {
      let workingKey = [...passedKey];
      for (const [key, value] of Object.entries(obj)) {
        workingKey.push(key);
        if (lodash.isObject(value) && !lodash.isArray(value)) {
          getKeys(value, keys, ...workingKey);
        } else {
          keys.push([...workingKey]);
        }
        workingKey = [...passedKey];
      }
    }

    // Run the recursive function to generate the attribute key paths
    const keys = [];
    getKeys(appConfChange.changeFields, keys);

    // for each defied component in appWebComponents check the key paths and if it is found update the fields
    for (const component of this.appWebComponents) {
      for (const key of keys) {
        if (lodash.has(component, key)) {
          lodash.set(
            component,
            key,
            lodash.get(appConfChange.changeFields, key)
          );
        }
      }
    }
    /* eslint-enable no-restricted-syntax */

    // rerender all the app tiles to get new values
    this.childUpdate();
  }

  /* eslint-disable no-nested-ternary */
  makeAppTiles() {
    return html`
      ${this.appWebComponents.map(
        (component, index) =>
          html`
            ${component.type === 'input-tile'
              ? html`<div
                  class="col-sm-6 col-lg-3 mb-4"
                  style="left: 0; top 0;"
                >
                  <div class="card mx-auto p-1">
                    <input-tile
                      .appConf=${this.appWebComponents[index]}
                      @updated="${() => {
                        this.updateComponents();
                      }}"
                      @reset="${() => {
                        this.resetComponents();
                      }}"
                      @loaded="${() => {
                        this.reloadMasonry();
                      }}"
                    ></input-tile>
                  </div>
                </div>`
              : component.type === 'derived-input-tile'
              ? html`<div class="col-sm-6 col-lg-3 mb-4">
                  <div class="card mx-auto p-1">
                    <derived-input-tile
                      .appConf=${this.appWebComponents[index]}
                      @loaded="${() => {
                        this.reloadMasonry();
                      }}"
                    ></derived-input-tile>
                  </div>
                </div>`
              : component.type === 'output-tile'
              ? html`<div class="col-sm-6 col-lg-3 mb-4">
                  <div class="card mx-auto p-1">
                    <output-tile
                      .appConf=${this.appWebComponents[index]}
                      @loaded="${() => {
                        this.reloadMasonry();
                      }}"
                    ></output-tile>
                  </div>
                </div>`
              : component.type === 'graph-tile'
              ? html`<div class="col-sm-12 col-lg-9 mb-4">
                  <graph-tile
                    .appConf=${this.appWebComponents[index]}
                    @loaded="${() => {
                      this.reloadMasonry();
                    }}"
                  ></graph-tile>
                </div>`
              : component.type === 'coeff-tile'
              ? html`<div class="col-sm-6 col-lg-3 mb-4">
                  <div class="card mx-auto p-1">
                    <coeff-tile
                      .appConf=${this.appWebComponents[index]}
                      @loaded="${() => {
                        this.reloadMasonry();
                      }}"
                    ></coeff-tile>
                  </div>
                </div>`
              : component.type === 'optimisation-tile'
              ? html`<div class="col-sm-6 col-lg-3 mb-4">
                  <div class="card mx-auto p-1">
                    <optimisation-tile
                      .appConf=${this.appWebComponents[index]}
                      @loaded="${() => {
                        this.reloadMasonry();
                      }}"
                    ></optimisation-tile>
                  </div>
                </div>`
              : component.type === 'image-tile'
              ? html`<div class="col-md-auto mb-4">
                  <div class="card mx-auto p-1">
                    <image-tile
                      .appConf=${this.appWebComponents[index]}
                      @loaded="${() => {
                        this.reloadMasonry();
                      }}"
                    ></image-tile>
                  </div>
                </div>`
              : component.type === 'radio-tile'
              ? html`<div class="col-md-auto mb-4">
                  <div class="card mx-auto p-1">
                    <radio-tile
                      .appConf=${this.appWebComponents[index]}
                      @loaded="${() => {
                        this.reloadMasonry();
                      }}"
                      @modifyForm="${e => {
                        this.modifyForm(e.detail);
                      }}"
                    ></radio-tile>
                  </div>
                </div>`
              : html`<p>Component ${component.type} Not Recognised</p>`}
          `
      )}
    `;
  }
  /* eslint-enable no-nested-ternary */
}
