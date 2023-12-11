import { cloneDeep } from 'lodash-es';
import { ggsandnetConf as appConf } from '../moduleConf.mjs';
// import { calculateCaisson as appCalc } from '../../local_modules/wa4e-math.js';
import { AppGeneric } from '../../elements/general/appGeneric.mjs';

export class App extends AppGeneric {
  static get properties() {
    return {
      appCalc: { type: Function },
    };
  }

  constructor() {
    super();
    this.appName = appConf.appName;
    this.title = appConf.appPageTitle;
    this.appWebComponents = appConf.appWebComponents;
    this.resetApp = cloneDeep(appConf.appWebComponents);
    this.output = {};
    this.appTiles = this.makeAppTiles();
    this.appCalc = this.testSubmit;
  }

  // eslint-disable-next-line class-methods-use-this
  testSubmit() {
    window.console.log('Do calculation');
  }
}

customElements.define(`${appConf.appName}-app`, App);
