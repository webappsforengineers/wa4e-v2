import { a as p } from './f1b15415.js';
import { A as s, y as t } from './7d2a1e3c.js';
import { A as e } from './4b7b723b.js';
import './4dcf61a8.js';
class a extends e {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = s(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = t);
  }
}
customElements.define(`${p.appName}-app`, a);
export { a as App };
