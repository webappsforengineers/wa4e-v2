import { a as p } from './2ac8d4a5.js';
import { A as a, y as s } from './af8340a6.js';
import { A as t } from './5a5b0ff3.js';
import './9aa6f97c.js';
class e extends t {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = a(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = s);
  }
}
customElements.define(`${p.appName}-app`, e);
export { e as App };
