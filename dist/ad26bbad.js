import { a as p } from './de1f37d7.js';
import { A as s, x as t, F as a } from './af8340a6.js';
import { A as e } from './d7a6cff7.js';
import './31d945dd.js';
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
