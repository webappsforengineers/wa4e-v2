import { pipeConf as appConf } from '../moduleConf.js';
import { calculateCaisson as appCalc } from '../../../../wa4e-v2-maths/output/wa4e-math.js';
import { AppGeneric } from '../../elements/general/appGeneric';
import '../../elements/myElements.js';

export class App extends AppGeneric {
  constructor() {
    super();
    this.title = appConf.appPageTitle;
    this.appWebComponents = appConf.appWebComponents;
    this.resetApp = appConf.appWebComponents;
    this.output = {};
    this.appTiles = this.makeAppTiles();
    this.appCalc = appCalc;
  }
}

customElements.define(`${appConf.appName}-app`, App);
