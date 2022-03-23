import { ncvConf as appConf } from '../moduleConf.mjs';
import { calculateNcV as appCalc } from '../../local_modules/wa4e-math.js';
import { AppGeneric } from '../../elements/general/appGeneric.js';

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
  }
}

customElements.define(`${appConf.appName}-app`, App);
