import { a as p } from './f4408a59.js';
import { A as s, w as t } from './53a5fa46.js';
import { A as a } from './b0c0d35c.js';
import './0bb0bb23.js';
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
