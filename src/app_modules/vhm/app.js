import { vhmConf as appConf } from '../moduleConf.js';
import { calculateVHM as appCalc } from '../../local_modules/wa4e-math.js';
import { AppGeneric } from '../../elements/general/appGeneric.js';
import '../../elements/myElements.js';

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
