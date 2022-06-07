import { a as p } from './4fffd734.js';
import { A as s, w as t } from './22c2cb96.js';
import { A as e } from './505f8385.js';
import './972ec86d.js';
class a extends e {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = s(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = t);
  }
}
customElements.define(`${p.appName}-app`, a);
export { a as App };
