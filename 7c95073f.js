import { a as p } from './80cf3527.js';
import { H as s, I as e } from './9c6eaecf.js';
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
      (this.appCalc = s),
      (this.appOptimize = e);
  }
}
customElements.define(`${p.appName}-app`, a);
export { a as App };
