import { a as p } from './cda930ed.js';
import { A as s, t } from './af8340a6.js';
import { A as e } from './b5696dde.js';
import './fbb5502c.js';
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
