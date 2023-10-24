import { a as p } from './90064f8e.js';
import { A as e, x as s, F as t } from './ee04e06d.js';
import { A as a } from './4cec8a7e.js';
import './24a8384b.js';
class i extends a {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = e(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = s),
      (this.appOptimize = t);
  }
}
customElements.define(`${p.appName}-app`, i);
export { i as App };
