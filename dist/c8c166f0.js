import { a as p } from './65db936e.js';
import { q as e, r as s } from './68f74eba.js';
import { A as t } from './01e6fe28.js';
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
