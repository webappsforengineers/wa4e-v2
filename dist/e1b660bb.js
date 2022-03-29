import { a as p } from './362949b9.js';
import { y as s, z as e } from './9eb0e703.js';
import { A as t } from './d1f4d11c.js';
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
