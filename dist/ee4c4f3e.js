import { a as p } from './ee7775cd.js';
import { A as e, m as s } from './f7fbe235.js';
import { A as t } from './371e5a2f.js';
import './bfed1259.js';
class a extends t {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = e(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = s);
  }
}
customElements.define(`${p.appName}-app`, a);
export { a as App };
