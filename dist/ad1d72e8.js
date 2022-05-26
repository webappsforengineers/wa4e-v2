import { a as p } from './f1b15415.js';
import { n as s } from './3ab7fe5c.js';
import { A as e } from './a714b690.js';
class t extends e {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = p.appWebComponents),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = s);
  }
}
customElements.define(`${p.appName}-app`, t);
export { t as App };
