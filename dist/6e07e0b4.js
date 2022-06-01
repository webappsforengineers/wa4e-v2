import { a as p } from './a2e1c17f.js';
import { t as s, C as t } from './a25434aa.js';
import { A as a } from './14237192.js';
import './3d42c7ab.js';
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
