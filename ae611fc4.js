import { a as p } from './01ee9db3.js';
import { A as e } from './b0c0d35c.js';
import { A as s } from './53a5fa46.js';
import './0bb0bb23.js';
class t extends e {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = s(p.appWebComponents)),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles());
  }
}
customElements.define(`${p.appName}-app`, t);
export { t as App };
