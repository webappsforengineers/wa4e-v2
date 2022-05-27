/*
This module takes the inputs in the form of pre-populated .xlsx input files uses the methods from the batch tiles to
generate outputs that are compared to the pre-populated .xlsx output files.
This testing aims to confirm that the mathematics libraries produce consistent results though any future changes.
This testing does not test that any component on the website is acting (im)properly.
This testing conforms to a 'black-box' model and therefore does not confirm that the mathematics is correct or any
individual function acts properly.
 */
import { isEqual } from 'lodash-es';
import { read } from 'xlsx';
import { batchTest } from '../../src/elements/app_tiles/batchTile.mjs';
import fs from 'fs';

export class testMath extends batchTest {
  static get properties() {
    const newProperties = {
      appCalc: { type: Function },
      filePathInput: { type: String },
      filePathOutput: { type: String },
    };
    return Object.assign(newProperties, super.properties);
  }

  constructor() {
    super();
    this.result = null;
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
    this.fileData = fs.readFile(this.filePathInput)
    this.workbook = null;
    this.fileTestData = fs.readFile(this.filePathOutput)
    this.workbookTestData = null;
  }

  runTest(){
    const fileTestInputPromise = this.fileData.arrayBuffer();
    fileTestInputPromise.then(
      value=>{
        this.fileData = value;
        this.workbook = read(this.fileData);
        },
      error=>{throw `file not loaded ${error}`});
    const resultObj = this.runCalc(true);

    const fileTestDataPromise = this.fileTestData.arrayBuffer();
    fileTestDataPromise.then(
      value=>{
        this.fileTestData = value;
        this.workbookTestData = read(this.fileTestData);
      },
      error=>{throw `file not loaded ${error}`});
    const goldObj = this.xlsxBookToObj(this.workbookTestData)

    this.result = isEqual(resultObj, goldObj) //This may need to be switched to isEqualWith to add a degree of tolerance
  }
}


