import { appConf } from './src/app_modules/caisson/appConfig.mjs';

// import * as XLSX from 'xlsx/xlsx.mjs'
// const xlsxUtils = XLSX.utils;
//
// const sheet = xlsxUtils.json_to_sheet(appConf);
//
// let workbook = xlsxUtils.book_new();
//
//
// xlsxUtils.book_append_sheet(workbook, sheet, 'test');
//
//
// XLSX.writeFile(workbook, 'test.xlsx');

// import jsonexport from 'jsonexport';
//
// jsonexport(appConf, function(err, csv){
//   if (err) return console.error(err);
//   console.log(csv);
// });

// Functions to destructure and restructure a single field in the appConf Objects
function destructureField(fieldKey, fieldObj) {
  return [
    fieldKey,
    fieldObj.label,
    fieldObj.unit,
    fieldObj.lb,
    fieldObj.ub,
    fieldObj.value,
  ];
}

function restructureField(fieldArray) {
  this[fieldArray[0]] = {
    label: fieldArray[1],
    unit: fieldArray[2],
    value: fieldArray.slice(5),
    visible: '',
    lb: fieldArray[3],
    ub: fieldArray[4],
  };
}

// Functions to destructure and restructure the field groups in the appConf Objects
function destructureGroup(groupKey, groupObj) {
  const groupArray = [];
  groupArray.push([groupKey]);
  Object.entries(groupObj).forEach(([fieldKey, fieldObj]) => {
    groupArray.push(destructureField(fieldKey, fieldObj));
  });
  return groupArray;
}

function restructureGroup(groupArray) {
  const groupObj = {};
  groupArray.slice(1).forEach(restructureField, groupObj);
  this[groupArray[0][0]] = groupObj;
}

// Functions to destructure and restructure the fields in the appConf Objects
function destructureFields(fieldsObj) {
  let fieldsArray = [];
  Object.entries(fieldsObj).forEach(([groupKey, groupObj]) => {
    fieldsArray = fieldsArray.concat(destructureGroup(groupKey, groupObj));
  });
  return fieldsArray;
}

function restructureFields(fieldsArray) {
  function checkLength(thing) {
    return thing.length === 1;
  }
  const fieldsObj = {};
  const slicePoints = fieldsArray.map(checkLength);

  let sliceIndex;
  const groupSplits = [];
  while (slicePoints.length > 0) {
    sliceIndex = slicePoints.findIndex(true);
    if (sliceIndex === -1) {
      throw Error('No Group found');
    }
    groupSplits.push(fieldsArray.slice(0, sliceIndex));
    for (let i = 0; i <= sliceIndex; i += 1) {
      slicePoints.shift();
      fieldsArray.shift();
    }
  }

  groupSplits.forEach(restructureGroup, fieldsObj);
  // return fieldsObj
}

function destructureComponents(componentsObj) {
  let componentArray = [];
  let headerArr;
  Object.entries(componentsObj).forEach(([compKey, compObj]) => {
    if (
      ['input-tile', 'derived-input-tile', 'output-tile'].includes(compObj.type)
    ) {
      headerArr = [
        [compKey, compObj.type, compObj.title],
        ['key', 'Name', 'Unit', 'ValueMin', 'ValueMax', 'Value(s)...'],
      ];
      componentArray = componentArray.concat(
        headerArr.concat(destructureFields(compObj.fields))
      );
    }
  });
  return componentArray;
}

function restructureComponents(componentsArray) {
  restructureFields(componentsArray);
}

const output = destructureComponents(appConf.appWebComponents);
// eslint-disable-next-line no-console
console.log(output);

const input = restructureComponents(output);
// eslint-disable-next-line no-console
console.log(input);
