import { a as p } from './deccfd8f.js';
import { A as s, q as e } from './7d2a1e3c.js';
import { A as t } from './4b7b723b.js';
import './4dcf61a8.js';
class a extends t {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = s(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = e);
  }
}
customElements.define(`${p.appName}-app`, a);
export { a as App };
