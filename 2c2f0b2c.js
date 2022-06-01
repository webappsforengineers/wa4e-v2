import { a as p } from './4fffd734.js';
import { A as s, w as a } from './57a2f6fa.js';
import { A as t } from './0cf2b873.js';
import './0a45aac5.js';
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
