import { a as p } from './a2e1c17f.js';
import { A as s, u as t, E as e } from './0742f914.js';
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
