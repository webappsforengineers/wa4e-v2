import { a as p } from './1b6f6b88.js';
import { G as s } from './f2f554f7.js';
import { A as t } from './07288c6a.js';
class e extends t {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = p.appWebComponents),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = s);
  }
}
customElements.define(`${p.appName}-app`, e);
export { e as App };
