import { a as p } from './a2e1c17f.js';
import { z as s, t, D as a } from './82de22c5.js';
import { A as e } from './59c666ad.js';
import './0da3ba7d.js';
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
