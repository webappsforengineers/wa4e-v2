import {
  html,
  fixture,
  unsafeStatic,
  defineCE,
  expect,
} from '@open-wc/testing';
import {
  calculateCaisson,
  calculateNcV,
  calculateConsolidatedNcV,
} from '../../src/local_modules/wa4e-math.js';
import { testConf as testConfCaisson } from './data/caisson/caisson-test.mjs';
import { testConf as testConfNCVCircular } from './data/ncv/ncv-circular-test.js';
import { testConf as testConfConsolidatedNCVStrip } from './data/consolidated-ncv/consolidated-ncv-strip-test.js';
import { TestMath } from './batchTestingClass.mjs';

import {
  caissonConf,
  ncvConf,
  consolidatedncvConf,
} from '../../src/app_modules/moduleConf.mjs';

const batchTest = defineCE(class extends TestMath {});
const batchTestTag = unsafeStatic(batchTest);

// Caisson Test
describe('Caisson Test', () => {
  it('math', async () => {
    const el = await fixture(
      html`<${batchTestTag} .testObject=${testConfCaisson} .appConf=${caissonConf.appWebComponents} .appCalc=${calculateCaisson}></${batchTestTag}>`
    );
    expect(el.result).to.equal(true);
  });
});
// End Caisson Test

// NcV Test
describe('NcV Test', () => {
  it('Circular', async () => {
    const el = await fixture(
      html`<${batchTestTag} .testObject=${testConfNCVCircular} .appConf=${ncvConf.appWebComponents} .appCalc=${calculateNcV}></${batchTestTag}>`
    );
    expect(el.result).to.equal(true);
  });
  // it('Strip', async () => {
  //   const el = await fixture(
  //     html`<${batchTestTag} .testObject=${testConfNCVCircular} .appConf=${ncvConf.appWebComponents} .appCalc=${calculateNcV}></${batchTestTag}>`
  //   );
  //   expect(el.result).to.equal(true);
  // });
});
// NcV End

// NcV Test
describe('Consolidated NcV Test', () => {
  // it('Circular', async () => {
  //   const el = await fixture(
  //     html`<${batchTestTag} .testObject=${testConfNCVCircular} .appConf=${ncvConf.appWebComponents} .appCalc=${calculateNcV}></${batchTestTag}>`
  //   );
  //   expect(el.result).to.equal(true);
  // });
  it('Strip', async () => {
    const el = await fixture(
      html`<${batchTestTag} .testObject=${testConfConsolidatedNCVStrip} .appConf=${consolidatedncvConf.appWebComponents} .appCalc=${calculateConsolidatedNcV}></${batchTestTag}>`
    );
    expect(el.result).to.equal(true);
  });
});
// NcV End

//
//   calculateDragAnchor,
//   calculateMCC,
//   calculateNcV,
//   calculatePinpiles,
//   calculatePipe,
//   calculateSlidingPLET,
//   calculateVH2M2T,
//   calculateVHM,
//   calculateZTI,
//
//   ,
//   dragAnchorConf,
//   mccsuConf,
//   ncvConf,
//   pinpilesConf,
//   pipeConf,
//   spletConf,
//   vh2m2tConf,
//   vhmConf,
//   ztiConf,
