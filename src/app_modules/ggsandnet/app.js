import { cloneDeep } from 'lodash-es';
import { calculateGgsandnet as appCalc } from '../../local_modules/ggSANDnetScript.js';
import { ggsandnetConf as appConf } from '../moduleConf.mjs';
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
    this.appCalc = appCalc;
  }
}

customElements.define(`${appConf.appName}-app`, App);
