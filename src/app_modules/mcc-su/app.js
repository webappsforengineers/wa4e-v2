import { cloneDeep } from 'lodash-es';
import { mccsuConf as appConf } from '../moduleConf.mjs';
import { calculateMCC as appCalc } from '../../local_modules/wa4e-math.js';
import { AppGeneric } from '../../elements/general/appGeneric.mjs';

export class App extends AppGeneric {
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
