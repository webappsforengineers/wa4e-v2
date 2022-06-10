import { a as p } from './0e2e3def.js';
import { A as e, z as s, G as t } from './4557aa85.js';
import { A as a } from './e6e4c060.js';
import './6fe75b33.js';
class i extends a {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = e(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = s),
      (this.appOptimize = t);
  }
}
customElements.define(`${p.appName}-app`, i);
export { i as App };
