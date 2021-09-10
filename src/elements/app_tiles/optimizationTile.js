import { html } from 'lit';
import { TileBase } from './tileBase';
import '../mySubComponents.js';

class optimizationTile extends TileBase {
  render() {
    this.checkOptions = this.appConf.options;
    this.formFields = this.appConf.fields;
    this.subComponents = this.appConf.subComponents;
    this.outputFields = this.arrangeFields();
    return [
      super.render(),
      html`
        <h2>${this.appConf.title}</h2>
        <p>${this.outputFields}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-around p-2">
          <!-- buttons -->
          <button
            class="btn btn-primary col-sm-12 col-md-6"
            @click=${() => this.appOptimize()}
          >
            OPTIMIZE
          </button>
        </div>
      `,
    ];
  }

  appOptimize() {
    const myEvent = new CustomEvent('optimize', {
      bubbles: true,
      composed: true,
    });
    this.clearOutput();
    this.dispatchEvent(myEvent);
  }

  clearOutput() {
    /* const myEvent = new CustomEvent('clear', {
      bubbles: true,
      composed: true,
    }); */
    this.formFields[''].Solution[0] = null;
    this.formFields[''].solution_beta_pV[0] = null;
    this.formFields[''].solution_beta_pH[0] = null;
    this.formFields[''].solution_beta_pM[0] = null;
    // this.dispatchEvent(myEvent);
  }

  arrangeFields() {
    return html`${Object.keys(this.formFields).map((keyOuter, index) => {
      const subComponent = this.subComponents.find(
        element => element.index === index
      );
      let htmlReturn = html``;
      if (typeof subComponent === 'undefined') {
        htmlReturn = html`
          <h3>${keyOuter}</h3>
          ${this.makeNestedFields(keyOuter)}
        `;
      } else {
        /* eslint-disable no-nested-ternary */
        htmlReturn = html` ${subComponent.position === 'beforeTitle'
          ? html`
              ${this.makeSubComponent(index)}
              <h3>${keyOuter}</h3>
              ${this.makeNestedFields(keyOuter)}
            `
          : subComponent.position === 'afterTitle'
          ? html`
              <h3>${keyOuter}</h3>
              ${this.makeSubComponent(index)} ${this.makeNestedFields(keyOuter)}
            `
          : subComponent.position === 'afterContent'
          ? html`
              <h3>${keyOuter}</h3>
              ${this.makeSubComponent(index)} ${this.makeNestedFields(keyOuter)}
            `
          : html`<p>SubComponentPositionUndefined</p>`}`;
        /* eslint-enable no-nested-ternary */
      }
      return htmlReturn;
    })}`;
  }
}

customElements.define(`optimization-tile`, optimizationTile);
