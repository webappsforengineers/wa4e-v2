import { a as p } from './3360a8a8.js';
import { A as s, t } from './013daf59.js';
import { A as a } from './a25cd8df.js';
import './7631c666.js';
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