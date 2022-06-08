import { a as p } from './65db936e.js';
import { A as s, z as t, G as e } from './0742f914.js';
import { A as a } from './8e0b46b3.js';
import './3f9f20b4.js';
class i extends a {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = s(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = t),
      (this.appOptimize = e);
  }
}
customElements.define(`${p.appName}-app`, i);
export { i as App };
