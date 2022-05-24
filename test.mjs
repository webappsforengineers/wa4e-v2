import { cloneDeep, merge, forIn } from 'lodash-es';
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
  function getValue(valueElement) {
    if (typeof valueElement === 'number') {
      return [valueElement];
    }
    return valueElement;
  }

  return [
    fieldKey,
    fieldObj.label,
    fieldObj.unit,
    fieldObj.lb,
    fieldObj.ub,
  ].concat(getValue(fieldObj.value));
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
  function whereTrue(thing) {
    return thing;
  }
  const fieldsObj = {};
  const slicePoints = fieldsArray.map(checkLength);

  let sliceIndex;
  const groupSplits = [];
  while (slicePoints.length > 0) {
    sliceIndex = slicePoints.slice(1).findIndex(whereTrue);
    if (sliceIndex === -1) {
      sliceIndex = slicePoints.length;
    }
    groupSplits.push(fieldsArray.slice(0, sliceIndex));
    for (let i = 0; i <= sliceIndex; i += 1) {
      slicePoints.shift();
      fieldsArray.shift();
    }
  }

  groupSplits.forEach(restructureGroup, fieldsObj);
  return fieldsObj;
}

function destructureComponents(componentsObj) {
  const componentArray = [];
  let headerArr;
  Object.entries(componentsObj).forEach(([compKey, compObj]) => {
    if (
      ['input-tile', 'derived-input-tile', 'output-tile'].includes(compObj.type)
    ) {
      headerArr = [
        [compKey, compObj.type, compObj.title],
        ['key', 'Name', 'Unit', 'ValueMin', 'ValueMax', 'Value(s)...'],
      ];
      componentArray.push(headerArr.concat(destructureFields(compObj.fields)));
    }
  });
  return componentArray;
}

function restructureComponents(componentsArray) {
  function getLength(thing) {
    if (typeof thing === 'number') {
      return 1;
    }
    return thing.length;
  }
  const restructuredCompObj = {};
  componentsArray.forEach(fieldsArr => {
    restructuredCompObj[fieldsArr[0][0]] = {
      type: fieldsArr[0][1],
      title: fieldsArr[0][2],
      valuesLength: getLength(fieldsArr[4].slice(5)),
      fields: restructureFields(fieldsArr.slice(2)),
    };
  });
  return restructuredCompObj;
}

// Merge the restructured components into the original object
function mergeWithOriginal(restructuredObj, originalObj) {
  const newObj = cloneDeep(originalObj);
  merge(newObj.appWebComponents, restructuredObj);
  return newObj;
}

// Clone object for each entry in the values arrays
function splitValues(mergedObj) {
  const inputLength = Object.values(mergedObj.appWebComponents).find(
    element => element.type === 'input-tile'
  ).valuesLength;
  for (let i = 0; i < inputLength; i += 1) {
    const cloneObj = cloneDeep(mergedObj);
    const paths = forIn(cloneObj);
    // eslint-disable-next-line no-console
    console.log(paths);
  }
}

// Combine objects on each field-groups value
// function combineValues(objsToCombine) {
//
// }

// Testing
const output = destructureComponents(appConf.appWebComponents);
// eslint-disable-next-line no-console
console.log(output);

const inputObj = restructureComponents(output);
// eslint-disable-next-line no-console
console.log(inputObj);

const mergedObj = mergeWithOriginal(inputObj, appConf);
// eslint-disable-next-line no-console
console.log(mergedObj);

const objectArrays = splitValues(mergedObj);
// eslint-disable-next-line no-console
console.log(objectArrays);
