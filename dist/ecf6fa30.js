import { a as p } from './2a2f0d82.js';
import { A as s, x as t, F as a } from './6881beda.js';
import { A as e } from './eaa4897c.js';
import './32482135.js';
class i extends e {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = s(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = t),
      (this.appOptimize = a);
  }
}
customElements.define(`${p.appName}-app`, i);
export { i as App };
