import { a as p } from './a2e1c17f.js';
import { A as s, u as t, E as e } from './af8340a6.js';
import { A as a } from './b5696dde.js';
import './fbb5502c.js';
class i extends a {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = s(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = t),
      (this.appOptimize = e);
  }
}
customElements.define(`${p.appName}-app`, i);
export { i as App };
