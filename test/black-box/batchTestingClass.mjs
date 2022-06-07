/*
This module takes the inputs in the form of pre-populated .xlsx input files uses the methods from the batch tiles to
generate outputs that are compared to the pre-populated .xlsx output files.
This testing aims to confirm that the mathematics libraries produce consistent results though any future changes.
This testing does not test that any component on the website is acting (im)properly.
This testing conforms to a 'black-box' model and therefore does not confirm that the mathematics is correct or any
individual function acts properly.
 */
import { isEqualWith, isArray, isObject } from 'lodash-es';
import { BatchTest } from '../../src/elements/app_tiles/batchTile.mjs';
import { structureUtils } from '../../src/local_modules/appConfDeReStrut.mjs';

export class TestMath extends BatchTest {
  static get properties() {
    const newProperties = {
      appCalc: { type: Function },
      testObject: { type: Object },
    };
    return Object.assign(newProperties, super.properties);
  }

  constructor() {
    super();
    this.result = null;
  }

  render() {
    const returnThis = super.render();
    this.runTest();
    return returnThis;
  }

  renderReplaceArgs(testObj, appConf, appCalc) {
    this.testObject = testObj;
    this.appConf = appConf.appWebComponents;
    this.appName = appConf.appName;
    this.appCalc = appCalc;
  }

  setup() {
    const appConfArray = Object.values(this.appConf);
    this.localAppConf = appConfArray.find(
      element => element.type === 'batch-tile'
    );
    this.formFields = appConfArray.find(
      element => element.type === 'input-tile'
    ).fields;
    this.subComponents = appConfArray.find(
      element => element.type === 'input-tile'
    ).subComponents;
  }

  runTest() {
    const resultObj = this.calcLoop(this.testObject.input, true);
    const hydratedOut = structureUtils.mergeWithOriginal(
      this.appConf,
      this.testObject.output,
      this.inputLength
    );
    function customizerFunction(objVal, srcVal) {
      let result = true;
      if (isArray(objVal)) {
        const sigFig = 4;
        objVal.forEach((arrElement, arrIndex) => {
          result =
            result &&
            arrElement.toPrecision(sigFig) ===
              srcVal[arrIndex].toPrecision(sigFig);
        });
        return result;
      }
      if (isObject(objVal)) {
        return true;
      }
      return undefined;
    }
    this.result = isEqualWith(resultObj, hydratedOut, customizerFunction); // This may need to be switched to isEqualWith to add a degree of tolerance
  }
}

customElements.define('math-test', TestMath);
