import { dotDivide, dotPow, exp, log, pow, subtract, max } from 'mathjs';

/**
 * Creates an array from begin to end in steps of step (replicates MatLabs linspace)
 * @param {num} begin Number to start array at
 * @param {num} end Number to end array at
 * @param {int} nstep Number of steps (i.e. size of the array)
 * @returns {*[]} An array as defined by the input
 */
const linspace = function(begin, end, nstep) {
  let vec = [];
  let step;
  //if nstep is greater than 1 this works
  if (nstep > 1) {
    step = (end - begin) / (nstep - 1); //begin must be less than end
    for (let i = 0; i < nstep; i++) {
      vec.push((i * step) + begin);
    }
  } else if (nstep === 1) {
    //if nstep is equal to one then we avoid a divide by 0 error and due to
    // converting from 1 index to 0 index we return the higher value
    step = (end - begin)
    vec.push(begin+step);
  }
  return vec;
};
/**
 * Creates an array from 10^begin to 10^end in steps (replicating matlab logspace)
 * @param {num} begin Number to start array at
 * @param {num} end Number to end array at
 * @param {int} nstep Number of steps (i.e. size of the array)
 * @returns {math.MathType} An array as defined by the input
 */
const logspace = function(begin, end, nstep) {
  return dotPow(10, linspace(begin, end, nstep));
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
let sig_v_plot = logspace(-1, 2, n_sec);
let z = linspace(0, results.z_max, n_sec);
let dz = diff(z);
dz.push(0);
let s = dotDivide(logspace(-1, 1, n_inc-1), max(dotDivide(logspace(-2, 1, n_inc-1), results.s_max)));
s.unshift(0);
let delta_s = diff(s);
delta_s.unshift(s[0]);



console.log(sig_v_plot);
console.log(z);
console.log(dz);
console.log(s);
console.log(delta_s);

console.log('Breakpoint');
