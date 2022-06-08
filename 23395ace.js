import { a as p } from './f1b15415.js';
import { A as s, y as t } from './0742f914.js';
import { A as e } from './8e0b46b3.js';
import './3f9f20b4.js';
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
