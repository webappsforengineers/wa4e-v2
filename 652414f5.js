import { a as p } from './e38c1fe5.js';
import { A as s, m as e } from './53a5fa46.js';
import { A as t } from './b0c0d35c.js';
import './0bb0bb23.js';
class a extends t {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = s(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = e);
  }
}
customElements.define(`${p.appName}-app`, a);
export { a as App };
