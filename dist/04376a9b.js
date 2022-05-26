import { a as p } from './a2e1c17f.js';
import { h as s, o as e } from './3ab7fe5c.js';
import { A as t } from './a714b690.js';
class a extends t {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = p.appWebComponents),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = s),
      (this.appOptimize = e);
  }
}
customElements.define(`${p.appName}-app`, a);
export { a as App };
