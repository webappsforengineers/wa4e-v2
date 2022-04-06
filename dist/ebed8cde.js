import { a as p } from './a2e1c17f.js';
import { D as e, E as s } from './9c6eaecf.js';
import { A as t } from './2693229c.js';
class a extends t {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = p.appWebComponents),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = e),
      (this.appOptimize = s);
  }
}
customElements.define(`${p.appName}-app`, a);
export { a as App };
