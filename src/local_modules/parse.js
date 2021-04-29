const json = '{"circular": [{"α_base": "0.000","α_side": "0.000","kB/Sum": "0.000","d/B": "0.000","Nc0": "5.549"},{"α_base": "0.000","α_side": "0.000","kB/Sum": "0.000","d/B": "0.100","Nc0": "6.408"},{"α_base": "0.000","α_side": "0.000","kB/Sum": "0.000","d/B": "0.200","Nc0": "6.839"}]}';

const parsed = JSON.parse(json);

const arr = [];

Object.keys(parsed).forEach(x => {
    arr.push(parsed[x]);
  }
)

console.log(arr);

