import { a as p } from './a2e1c17f.js';
import { D as s, E as t } from './c2a0d119.js';
import { A as a } from './cd3c7a7a.js';
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
