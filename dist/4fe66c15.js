import { a as p } from './d1437ee2.js';
import { z as s, q as e } from './82de22c5.js';
import { A as t } from './59c666ad.js';
import './0da3ba7d.js';
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
