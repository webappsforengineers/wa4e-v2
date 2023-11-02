import { a as p } from './2f826490.js';
import { A as s, n as t } from './53a5fa46.js';
import { A as e } from './b0c0d35c.js';
import './0bb0bb23.js';
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
