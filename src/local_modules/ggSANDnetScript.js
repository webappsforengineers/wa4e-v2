export async function calculateGgsandnet(appWebComponents) {
  // const inputTile = Object.values(appWebComponents).find(element => element.type === 'input-tile')
  // const derivedInputs = Object.values(appWebComponents).find(element => element.type === 'derived-input-tile')
  // const outputs = Object.values(appWebComponents).find(element => element.type === 'output-tile')
  const graphData = Object.values(appWebComponents).find(
    element => element.type === 'graph-tile'
  );

  let nnOutputs;
  let nnTargets;

  await fetch('http://localhost:8080/api/train-model/', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(json => {
      window.console.log(json);
      nnOutputs = json.outputs.flat();
      nnTargets = json.targets.flat();
      // window.console.log('test', nnOutputs);
    });
  // window.console.log('test2', nnOutputs);

  const graphInternal = {
    nnOutputs,
    nnTargets,
  };

  for (const [key, value] of Object.entries(graphInternal)) {
    graphData.fields[key] = value;
  }

  window.console.log(graphData.fields);
  window.console.log(graphData);
}
