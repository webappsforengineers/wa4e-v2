import { a as p } from './4fffd734.js';
import { j as e } from './68f74eba.js';
import { A as s } from './01e6fe28.js';
class t extends s {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = p.appWebComponents),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = e);
  }
}
customElements.define(`${p.appName}-app`, t);
export { t as App };
