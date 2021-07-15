import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement';

export class AppGeneric extends StyledElement {
  static get properties() {
    return {
      appWebComponents: { type: Object },
      title: { type: String },
      output: { type: Object },
      appTiles: { type: html },
      appCalc: { type: Function },
      resetApp: { type: Object },
    };
  }

  render() {
    return [
      super.render(),
      html`
        <div class="row">
          <header-element page-title=${this.title}></header-element>
        </div>
        ${this.appTiles}
        <div class="row">
          <footer-element></footer-element>
        </div>
      `,
    ];
  }

  updateComponents() {
    this.output = this.appCalc(
      this.appWebComponents.find(element => element.type === 'input-tile'),
      0,
      0
    );
    // ToDo: these loops take an object from the math output and map it to a tiles fields, these could be functions.
    /* eslint-disable no-restricted-syntax */
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
    /* eslint-enable no-restricted-syntax */
    // Launch new event to update child components
    this.childUpdate();
  }

  resetComponents() {
    this.appWebComponents = this.resetApp;
    this.childUpdate();
  }

  childUpdate() {
    const myEvent = new CustomEvent('update-children', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }

  /* eslint-disable no-nested-ternary */
  makeAppTiles() {
    return html` <div class="row" data-masonry='{"percentPosition": true }'>
      ${this.appWebComponents.map(
        (component, index) =>
          html`
            ${component.type === 'input-tile'
              ? html`<div class="col-sm-6 col-lg-3 mb-4">
                  <input-tile
                    .appConf=${this.appWebComponents[index]}
                    @updated="${() => {
                      this.updateComponents();
                    }}"
                    @reset="${() => {
                      this.resetComponents();
                    }}"
                  ></input-tile>
                </div>`
              : component.type === 'derived-input-tile'
              ? html`<div class="col-sm-6 col-lg-3 mb-4">
                  <derived-input-tile
                    .appConf=${this.appWebComponents[index]}
                  ></derived-input-tile>
                </div>`
              : component.type === 'output-tile'
              ? html`<div class="col-sm-6 col-lg-3 mb-4">
                  <output-tile
                    .appConf=${this.appWebComponents[index]}
                  ></output-tile>
                </div>`
              : component.type === 'image-tile'
              ? html`<div class="col-sm-12 col-lg-6 mb-4">
                  <image-tile
                    .appConf=${this.appWebComponents[index]}
                  ></image-tile>
                </div>`
              : component.type === 'graph-tile'
              ? html`<div class="col-sm-12 col-lg-6 mb-4">
                  <graph-tile
                    .appConf=${this.appWebComponents[index]}
                  ></graph-tile>
                </div>`
              : component.type === 'coeff-tile'
              ? html`<div class="col-sm-6 col-lg-3 mb-4">
                  <coeff-tile
                    .appConf=${this.appWebComponents[index]}
                  ></coeff-tile>
                </div>`
              : component.type === 'optimisation-tile'
              ? html`<div class="col-sm-6 col-lg-3 mb-4">
                  <optimisation-tile
                    .appConf=${this.appWebComponents[index]}
                  ></optimisation-tile>
                </div>`
              : html`<p>Component ${component.type} Not Recognised</p>`}
          `
      )}
    </div>`;
  }
  /* eslint-enable no-nested-ternary */
}
