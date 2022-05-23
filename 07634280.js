import { a as p } from './deccfd8f.js';
import { B as s } from './c2a0d119.js';
import { A as e } from './cd3c7a7a.js';
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
