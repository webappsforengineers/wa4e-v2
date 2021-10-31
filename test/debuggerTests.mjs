import {Helper} from "../../wa4e-v2-maths/local_modules/helper.mjs";


function quadriatic(x, a, b, c){
  return a*(x*x)+b*(x)+c;
}

let functionVal;
let argVal;
let stepHist;
[functionVal, argVal, stepHist] = Helper.fminsearch(quadriatic, [2, 10, 4, 0], 2)


