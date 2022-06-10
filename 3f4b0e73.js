import { a as p } from './06e8652d.js';
import { A as s, x as e, F as t } from './4557aa85.js';
import { A as a } from './e6e4c060.js';
import './6fe75b33.js';
class i extends a {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = s(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = e),
      (this.appOptimize = t);
  }
}
customElements.define(`${p.appName}-app`, i);
export { i as App };
