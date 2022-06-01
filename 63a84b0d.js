import { a as p } from './d1437ee2.js';
import { A as s, t } from './57a2f6fa.js';
import { A as a } from './0cf2b873.js';
import './0a45aac5.js';
class e extends a {
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
customElements.define(`${p.appName}-app`, e);
export { e as App };
