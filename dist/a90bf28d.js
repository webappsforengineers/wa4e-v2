import { a as p } from './6432928c.js';
import { r as s, s as t } from './43f43acf.js';
import { A as a } from './7aca4d76.js';
class e extends a {
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
customElements.define(`${p.appName}-app`, e);
export { e as App };
