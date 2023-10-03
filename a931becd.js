import { a as p } from './9eabaf9a.js';
import { A as s, u as a, E as t } from './013daf59.js';
import { A as e } from './a25cd8df.js';
import './7631c666.js';
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
