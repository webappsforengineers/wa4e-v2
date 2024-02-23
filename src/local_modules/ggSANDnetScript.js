export async function calculateGgsandnet(appWebComponents) {
  const inputTile = Object.values(appWebComponents).find(
    element => element.type === 'input-tile-no-spinner'
  );

  const inputProperties = [
    inputTile.fields['Soil Properties'].MES.value,
    inputTile.fields['Soil Properties'].MESA.value,
    inputTile.fields['Soil Properties'].OCR.value,
    inputTile.fields['Soil Properties'].VR.value,
    inputTile.fields['Soil Properties'].RD.value,
    inputTile.fields['Soil Properties'].AGS.value,
    inputTile.fields['Soil Properties'].UC.value,
    inputTile.fields['Soil Properties'].ISS.value,
  ];

  const propSelect = [];

  if (inputTile.subComponents[0].options.MES_included.check_status === true) {
    propSelect.push(0);
  }
  if (inputTile.subComponents[0].options.MESA_included.check_status === true) {
    propSelect.push(1);
  }
  if (inputTile.subComponents[0].options.OCR_included.check_status === true) {
    propSelect.push(2);
  }
  if (inputTile.subComponents[0].options.VR_included.check_status === true) {
    propSelect.push(3);
  }
  if (inputTile.subComponents[0].options.RD_included.check_status === true) {
    propSelect.push(4);
  }
  if (inputTile.subComponents[0].options.AGS_included.check_status === true) {
    propSelect.push(5);
  }
  if (inputTile.subComponents[0].options.UC_included.check_status === true) {
    propSelect.push(6);
  }
  if (inputTile.subComponents[0].options.ISS_included.check_status === true) {
    propSelect.push(7);
  }

  // window.console.log(inputTile.subComponents[0].options.MES_included.check_status === true ? 1 : );
  window.console.log(propSelect);

  // const derivedInputs = Object.values(appWebComponents).find(element => element.type === 'derived-input-tile')
  const outputs = Object.values(appWebComponents).find(
    element => element.type === 'output-tile'
  );
  const graphData = Object.values(appWebComponents).find(
    element => element.type === 'graph-tile'
  );

  let nnOutputs;
  let nnTargets;
  let strain;
  let GGo;
  let performanceMSE;

  await fetch('http://localhost:8080/api/train-model/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      input_properties: inputProperties,
      prop_select: propSelect,
    }),
  })
    .then(response => response.json())
    .then(json => {
      window.console.log(json);
      nnOutputs = json.outputs.flat();
      nnTargets = json.targets.flat();
      strain = json.strain;
      GGo = json.GGo;
      performanceMSE = json.performance_mse;
      // window.console.log('test', nnOutputs);
    });
  // window.console.log('test2', nnOutputs);

  const graphInternal = {
    nnOutputs,
    nnTargets,
    strain,
    GGo,
  };

  for (const [key, value] of Object.entries(graphInternal)) {
    graphData.fields[key] = value;
  }

  const outputsInternal = {
    fields: {
      Performance: {
        MSE: performanceMSE,
      },
    },
  };

  for (const [keyOuter, valueOuter] of Object.entries(outputsInternal.fields)) {
    for (const [keyInner, valueInner] of Object.entries(valueOuter)) {
      outputs.fields[keyOuter][keyInner].value = valueInner;
    }
  }

  window.console.log(graphData.fields);
  window.console.log(outputs.fields);
}
