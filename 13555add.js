import { a as p } from './25798956.js';
import { A as e } from './9c6eaecf.js';
import { A as s } from './2693229c.js';
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
