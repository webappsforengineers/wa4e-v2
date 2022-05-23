import { a as p } from './48f7c2c3.js';
import { J as s } from './c2a0d119.js';
import { A as t } from './cd3c7a7a.js';
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
