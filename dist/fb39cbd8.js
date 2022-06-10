import { a as p } from './ee7775cd.js';
import { A as e, m as s } from './4557aa85.js';
import { A as t } from './e6e4c060.js';
import './6fe75b33.js';
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
