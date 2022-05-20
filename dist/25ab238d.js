import { a as p } from './d1437ee2.js';
import { C as e } from './f2f554f7.js';
import { A as s } from './07288c6a.js';
class t extends s {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = p.appWebComponents),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = e);
  }
}
customElements.define(`${p.appName}-app`, t);
export { t as App };
