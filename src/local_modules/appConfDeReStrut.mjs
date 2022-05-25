import { cloneDeep, mergeWith, isArray } from 'lodash-es';

export class structureUtils {
// Functions to destructure and restructure a single field in the appConf Objects
  static destructureField(fieldKey, fieldObj) {
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

  static restructureField(fieldArray) {
    return {
      label: fieldArray[1],
      unit: fieldArray[2],
      value: fieldArray.slice(5),
      visible: '',
      lb: fieldArray[3],
      ub: fieldArray[4],
    };
  }

// Functions to destructure and restructure the field groups in the appConf Objects
  static destructureGroup(groupKey, groupObj) {
    const groupArray = [];
    groupArray.push([groupKey]);
    Object.entries(groupObj).forEach(([fieldKey, fieldObj]) => {
      groupArray.push(this.destructureField(fieldKey, fieldObj));
    });
    return groupArray;
  }

  static restructureGroup(groupArray) {
    const groupObj = {};
    groupArray.slice(1).forEach(fieldArray => {
      groupObj[fieldArray[0]] = this.restructureField(fieldArray);
    });
    return groupObj;
  }

// Functions to destructure and restructure the fields in the appConf Objects
  static destructureFields(fieldsObj) {
    let fieldsArray = [];
    Object.entries(fieldsObj).forEach(([groupKey, groupObj]) => {
      fieldsArray = fieldsArray.concat(this.destructureGroup(groupKey, groupObj));
    });
    return fieldsArray;
  }

  static restructureFields(fieldsArray) {
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
      // sliceIndex + 1, because we always find the sliceIndex from element 1
      groupSplits.push(fieldsArray.slice(0, sliceIndex + 1));
      for (let i = 0; i <= sliceIndex; i += 1) {
        slicePoints.shift();
        fieldsArray.shift();
      }
    }

    groupSplits.forEach( groupArray => {
      fieldsObj[groupArray[0][0]] = this.restructureGroup(groupArray);
    });

    return fieldsObj;
  }

// Functions to destructure and restructure the Components in the webcomponent Object
  static destructureComponents(componentsObj) {
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
        componentArray.push(headerArr.concat(this.destructureFields(compObj.fields)));
      }
    });
    return componentArray;
  }

  static destructureSelectedRadios(selectedRadios) {
    const radioArr = []
    selectedRadios.forEach((radio, radioIdx) => {
      const radioTitle = radio.title.toLowerCase().replaceAll(" ", "-");
      const subRadioArr = [
        [(radioIdx + 1).toString(), radioTitle, "DO NOT MODIFY SHEET OR CONTENTS"],
        [radio.title, radio.value],
      ]
      radioArr.push(subRadioArr);
    });
    return radioArr;
  }

  static restructureComponents(componentsArray) {
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
        fields: this.restructureFields(fieldsArr.slice(2)),
      };
    });
    return restructuredCompObj;
  }

// Merge the restructured components into the original object
  static mergeWithOriginal(originalObj, restructuredObj, index) {
    function customizerFunction(_objVal, srcVal) {
      if(isArray(srcVal)) {
        return srcVal[index];
      }
      return undefined;
    }
    const newObj = cloneDeep(originalObj);
    mergeWith(newObj, restructuredObj, customizerFunction);
    return newObj;
  }

  // Merge restructured components and array values
  static mergeWithOriginalArray(originalObj, restructuredObj, inputLength) {
    function customizerFunction(objVal, srcVal) {
      if(isArray(objVal)) {
        // if the array is full, then return the array
        if(objVal.length === inputLength) {
          return objVal;
        }
        // otherwise push the new value
        objVal.push(srcVal);
        return objVal;
      }

      return undefined;
    }
    const newObj = cloneDeep(originalObj);
    mergeWith(newObj, restructuredObj, customizerFunction);
    return newObj;
  }

}
