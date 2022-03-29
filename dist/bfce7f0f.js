import { a as p } from './4cf8a1b6.js';
import { x as e } from './9eb0e703.js';
import { A as s } from './d1f4d11c.js';
class t extends s {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = p.appWebComponents),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = e);
  }
}
customElements.define(`${p.appName}-app`, t);
export { t as App };
