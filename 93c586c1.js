import { a as p } from './deccfd8f.js';
import { A as s, q as a } from './af8340a6.js';
import { A as t } from './5a5b0ff3.js';
import './9aa6f97c.js';
class e extends t {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = s(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = a);
  }
}
customElements.define(`${p.appName}-app`, e);
export { e as App };
