import { a as p } from './65db936e.js';
import { A as s, z as a, G as t } from './57a2f6fa.js';
import { A as e } from './0cf2b873.js';
import './0a45aac5.js';
class i extends e {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = s(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = a),
      (this.appOptimize = t);
  }
}
customElements.define(`${p.appName}-app`, i);
export { i as App };
