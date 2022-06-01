import { a as p } from './d1437ee2.js';
import { q as s } from './a25434aa.js';
import { A as e } from './14237192.js';
import './3d42c7ab.js';
class t extends e {
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
customElements.define(`${p.appName}-app`, t);
export { t as App };
