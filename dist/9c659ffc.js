import { a as p } from './ff59e775.js';
import { A as e, v as s } from './ee04e06d.js';
import { A as t } from './784aad27.js';
import './24a8384b.js';
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
