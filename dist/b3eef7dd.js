import { a as p } from './560f2a65.js';
import { A as s, u as t, E as a } from './53a5fa46.js';
import { A as e } from './b0c0d35c.js';
import './0bb0bb23.js';
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