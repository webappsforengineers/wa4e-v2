import { a as p } from './f83a76b9.js';
import { i as s } from './a27e039f.js';
import { A as e } from './f8c198d2.js';
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
