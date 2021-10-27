import { dotDivide, dotPow, exp, log, pow, subtract, max } from 'mathjs';
import stdLinspace from '@stdlib/array-linspace/lib/linspace.js';
import stdLogspace from '@stdlib/array-logspace/lib/logspace.js';


/**
 * Creates an array from begin to end in steps of step (replicates MatLabs linspace)
 * @param {num} begin Number to start array at
 * @param {num} end Number to end array at
 * @param {int} nstep Number of steps (i.e. size of the array)
 * @returns {*[]} An array as defined by the input
 */
const matlabLinspace = function(begin, end, nstep) {
  if (nstep === 1) {
    return [end]
  } else {
    return stdLinspace(begin, end, nstep)
  }
};
/**
 * Creates an array from 10^begin to 10^end in steps (replicating matlab logspace)
 * @param {num} begin Number to start array at
 * @param {num} end Number to end array at
 * @param {int} nstep Number of steps (i.e. size of the array)
 * @returns {math.MathType} An array as defined by the input
 */
const matlabLogspace = function(begin, end, nstep) {
  if (nstep === 1) {
    return [10 ** end]
  } else {
    return stdLogspace(begin, end, nstep)
  }
};
/**
 * Creates an array with the difference in values of the input array (replicating matlab diff)
 * @param {*[]|math.MathType} array_in Number to start array at
 * @returns {math.MathType} An array as defined by the input
 */
const diff = function(array_in){
  const array_beg = array_in.slice(0,-1);
  const array_end = array_in.slice(1);
  return subtract(array_end, array_beg);
}

let n_sec = 100;
let n_inc = 2;


let results = {};
results.z_max = 6;
results.s_max = results.z_max/10;

// dot pow does out vector power, linspace see above, 3 is 2 - (-1) then we need (n_sec-1) to get correct equal spacing
let sig_v_plot = [matlabLogspace(-1, 2, n_sec)];
let z = [matlabLinspace(0, results.z_max, n_sec)];
let dz = diff(z[0]);
dz.push(0);
let s = [dotDivide(matlabLogspace(-1, 1, n_inc-1), max(dotDivide(matlabLogspace(-2, 1, n_inc-1), results.s_max)))];
s[0].unshift(0);
let delta_s = diff(s[0]);
delta_s.unshift(s[0][0]);



console.log(sig_v_plot);
console.log(z);
console.log(dz);
console.log(s);
console.log(delta_s);

console.log('Breakpoint');
