import { vh2m2tConf as appConf } from '../moduleConf.mjs';
import {
  calculateVH2M2T as appCalc,
  optimizeVH2M2T as appOptimize,
} from '../../local_modules/wa4e-math.js';

import { AppGeneric } from '../../elements/general/appGeneric.mjs';

export class App extends AppGeneric {
  constructor() {
    super();
    this.appName = appConf.appName;
    this.title = appConf.appPageTitle;
    this.appWebComponents = appConf.appWebComponents;
    this.resetApp = appConf.appWebComponents;
    this.output = {};
    this.appTiles = this.makeAppTiles();
    this.appCalc = appCalc;
    this.appOptimize = appOptimize;
  }
}

customElements.define(`${appConf.appName}-app`, App);
