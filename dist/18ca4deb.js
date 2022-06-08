import { a as p } from './501d08e2.js';
import { A as s, m as e } from './af8340a6.js';
import { A as t } from './b5696dde.js';
import './fbb5502c.js';
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
