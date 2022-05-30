import { jest, expect } from '@jest/globals';

import { caissonConf } from '../../src/app_modules/moduleConf.mjs';

import { calculateCaisson } from '../../src/local_modules/wa4e-math.js';

import { testMath } from './batchTestingClass.mjs';

jest.useFakeTimers();
// import { html, fixture, unsafeStatic, defineCE, expect } from '@open-wc/testing';
console.log('hello');

console.log(caissonConf);

console.log(calculateCaisson(caissonConf.appWebComponents));

test('Caisson Maths', async () => {
  class thisTest extends testMath {
    constructor() {
      super();
      this.appConf = caissonConf.appWebComponents;
      this.appName = caissonConf.appName;
      this.appCalc = calculateCaisson;
      this.filePathInput = './data/caisson/caisson-template.csv';
      this.filePathOutput = './data/caisson/caisson-template-gold.csv';
      this.setup();
      this.runTest();
    }
  }
  const caissonTest = thisTest.constructor();
  expect(caissonTest.result).toBe(true);
});

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
