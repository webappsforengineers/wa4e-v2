import { a as p } from './65f25f2f.js';
import { k as s, l as t } from './3ab7fe5c.js';
import { A as e } from './a714b690.js';
class a extends e {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = p.appWebComponents),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = s),
      (this.appOptimize = t);
  }
}
customElements.define(`${p.appName}-app`, a);
export { a as App };
