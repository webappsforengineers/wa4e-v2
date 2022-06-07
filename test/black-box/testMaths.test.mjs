import {
  html,
  fixture,
  unsafeStatic,
  defineCE,
  expect,
} from '@open-wc/testing';
import { calculateCaisson } from '../../src/local_modules/wa4e-math.js';
import { testConf } from './data/caisson/caisson-test.mjs';
import { TestMath } from './batchTestingClass.mjs';

import { caissonConf } from '../../src/app_modules/moduleConf.mjs';

describe('Caisson Test', () => {
  it('math', async () => {
    // Caisson Test

    const caissonTest = defineCE(class extends TestMath {});
    const caissonTag = unsafeStatic(caissonTest);
    const el = await fixture(
      html`<${caissonTag} .testObject=${testConf} .appConf=${caissonConf} .appCalc=${calculateCaisson}></${caissonTag}>`
    );
    expect(el.result).to.equal(true);
  });
});
// End Caisson Test

// calculateConsolidatedNcV,
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
//   consolidatedncvConf,
//   dragAnchorConf,
//   mccsuConf,
//   ncvConf,
//   pinpilesConf,
//   pipeConf,
//   spletConf,
//   vh2m2tConf,
//   vhmConf,
//   ztiConf,
