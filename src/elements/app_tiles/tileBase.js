import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement.js';

// This defines the base class to build the app-tiles
export class TileBase extends StyledElement {
  // define the JS object appConf to be passed to the tile from the app
  static get properties() {
    return {
      // use .appConf in the HTML tag to send a configuration JS object to
      // configure the tile the `.` tells the webcomponents not to serialise or
      // stringify the object
      appConf: { type: Object },
      appName: { type: String },
    };
  }

  // Add and destroy callbacks so components rerender on at the parent app request
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('update-children', () => this.requestUpdate());
  }

  disconnectedCallback() {
    window.removeEventListener('update-children', () => this.requestUpdate());
    super.disconnectedCallback();
  }

  updated(_changedProperties) {
    super.updated(_changedProperties);
    this.tileLoaded();
  }

  async tileLoaded() {
    const myEvent = new CustomEvent('loaded', {
      bubbles: true,
      composed: true,
    });
    await this.updateComplete;
    this.dispatchEvent(myEvent);
  }

  // Generic field making functions used by multiple apps

  makeNestedFields(keyOuter, callback) {
    return html`${Object.keys(this.appConf.fields[`${keyOuter}`]).map(
      key =>
        html`
          <input-field
            .key=${key}
            .appConf=${this.appConf.fields[keyOuter][key]}
            .callback=${callback}
          ></input-field>
        `
    )}`;
  }

  /* eslint-disable class-methods-use-this */
  getSubComponents(subCompArr, superIdx) {
    const beforeTitle = [];
    const afterTitle = [];
    const afterContent = [];
    Object.entries(subCompArr).forEach(([index, subComp]) => {
      if (subComp.index === superIdx) {
        if (subComp.position === 'beforeTitle') {
          beforeTitle.push(index);
        } else if (subComp.position === 'afterTitle') {
          afterTitle.push(index);
        } else if (subComp.position === 'afterContent') {
          afterContent.push(index);
        }
      }
    });
    return [beforeTitle, afterTitle, afterContent];
  }
  /* eslint-enable class-methods-use-this */

  makeSubComponent(index) {
    const component = this.subComponents[index];
    let subcomponentHTML;
    if (component.type === 'radio-tile') {
      subcomponentHTML = html` <div style="display: ${component.display};">
        <radio-tile
          .appConf=${component}
          @clear="${() => {
            this.clearOutput();
          }}"
        ></radio-tile>
      </div>`;
    } else if (component.type === 'table-tile') {
      subcomponentHTML = html` <div>
        <table-tile .appConf=${component}></table-tile>
      </div>`;
    } else if (component.type === 'input-table') {
      subcomponentHTML = html` <div>
        <input-table .appConf=${component}></input-table>
      </div>`;
    } else if (component.type === 'test-tile') {
      subcomponentHTML = html` <div>
        <test-tile .appConf=${component}></test-tile>
      </div>`;
    } else {
      subcomponentHTML = html`<p>
        Component ${component.type} Not Recognised
      </p>`;
    }
    return html`${subcomponentHTML}`;
  }
}
