function Helper() {}

// returns a number constrained to desired lower and upper bounds
Helper.constrainNumber = function(value, lower, upper) {
    if (value < lower) {
        return lower;
    }
    if (value > upper) {
        return upper;
    }

        return value;

}

// returns a number constrained to a desired upper bound
Helper.constrainNumberGreater = function(value, upper) {
    return Helper.constrainNumber(value, Number.NEGATIVE_INFINITY, upper);
}

// returns a number constrained to a desired lower bound
Helper.constrainNumberLess = function(value, lower) {
    return Helper.constrainNumber(value, lower, Number.POSITIVE_INFINITY);
}

// returns a vector of zeros of specified size
Helper.zerosVector = function(count) {
    const array = [];

    let i = 0;

    while (i < count) {
        array.push(0);
        i += 1;
    }

    return array;
};

// debug function that returns a readable string representing a 2D array
Helper.getStringFrom2DArray = function(arr, decimalPlaces = 2) {
    let result = "";

    for (let i = 0; i < arr.length; i += 1) {
        const row = arr[i];

        for (let j = 0; j < row.length; j += 1) {
            result += Number(row[j]).toFixed(decimalPlaces);

            if (j < row.length - 1) {
                result += ", ";
            }
        }

        result += "\n";
    }

    return result;
};

// debug function that shows an alert box containing a given 2D array's contents
Helper.alertArray = function(arr, decimalPlaces = 2) {
    alert(Helper.getStringFrom2DArray(arr, decimalPlaces));
};

// returns a column array from a row-based 2D array
Helper.getColumnFrom2DArray = function(arr, column) {
    const result = [];

    for (let i = 0; i < arr.length; i+=1) {
        result.push(arr[i][column]);
    }

    return result;
};

// returns the arithmetic average of a 1D array
Helper.getAverageFromArray = function(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i+=1) {
        result += arr[i];
    }

    result /= arr.length;

    return result;
};

// returns the arithmetic average of several numeric function arguments
Helper.getAverage = function(...args) {
    let result = 0;

    for (let i = 0; i < args.length; i+=1) {
        result += args[i];
    }


    return result / args.length;
};

// finds the value of a given array index inside an array
Helper.index = function(arr, index) {
    if (index >= 0 && index < arr.length) {
        return arr[index];
    }

    return NaN;
};

// finds the index of a given value inside an array (sorted in ascending order)
// will return the largest result that is equal or less than the given value
Helper.match = function(value, arr) {
    let ClosestIndex = 0;

    for (let i = 0; i < arr.length; i+=1) {
        if (arr[i] <= value) {
            ClosestIndex = i;
        }
        else {
            break;
        }
    }

    return ClosestIndex;
};

// checks whether a named value is within lower and upper numerical bounds (inclusive)
// reports errors to a supplied results variable
Helper.inputCheck = function(results, name, value, lower = Number.NEGATIVE_INFINITY, upper = Number.POSITIVE_INFINITY, decimalPlaces = 2) {
    if (lower === ">=0" && (value.isNaN || value < 0)) {
        results.errors.push(`${name  } must be ≥ 0.`);
    }
    else if (lower === ">0" && (value.isNaN || value <= 0)) {
        results.errors.push(`${name  } must be > 0.`);
    }
    else if (lower === Number.NEGATIVE_INFINITY && upper === Number.POSITIVE_INFINITY && value.isNaN) {
        results.errors.push(`${name  } must be a number.`);
    }
    else if (value.isNaN || value < lower || value > upper) {
        results.errors.push(`${name  } must be between ${  Number(lower).toFixed(decimalPlaces)  } and ${  Number(upper).toFixed(decimalPlaces)  }.`);
    }
};

// reports an error message regarding erroneous inputs
Helper.alertInputErrors = function(results) {
    if (results.errors.length > 0) {
        let str = "";

        for (let i = 0; i < results.errors.length; i+=1) {
            str += `${results.errors[i]  }\n`;
        }

        alert(str);
        return true;
    }

    return false;
}

/**
 * A goal seek function similar to one found in a spreadsheet application.
 * @param {string} variableName - The name of the variable (in code).
 * @param {number} goal - The target value.
 * @param {number} threshold - The allowed deviation from the goal (i.e. goal +- threshold).
 * @param {Object} inputs - An object populated with properties corresponding to interface values.
 * @param {Object} calculation - An object containing a function that performs calculations on inputs.
 * @returns {Object} An object containing results stored as object properties.
 */
Helper.goalSeek = function(variableName, goal, threshold, inputs, calculation) {
    const debug = false;
    let str = ""; // for debugging purposes

    const initialValue = inputs[variableName];
    const magnitudeAbove = 2; // orders of magnitude above the initial value to search
    const magnitudeBelow = 1; // orders of magnitude below the initial value to search
    let upperBound = initialValue + initialValue * 10**magnitudeAbove;
    let lowerBound = initialValue - initialValue * 10**magnitudeAbove;
    const markerCount = 10**(magnitudeAbove + magnitudeBelow);
    let iteration = 0;
    const maxIterations = 10;
    let results = calculation.run(inputs);
    let found = false;
    const sterilisedInputs = inputs;

    // return early if we started within the threshold of the goal
    if (Math.abs(results.optimizationValue - goal) <= threshold) {
        found = true;
    }
    else {
        while (iteration < maxIterations) {
            // identify the marker with the value closest to goal
            const markerDifference = Math.abs(upperBound - lowerBound) / (markerCount - 1);

            const closest = {
                index: -1,
                difference: Number.POSITIVE_INFINITY,
                value: 0,
            };

            for (let i = 0; i < markerCount; i+=1) {
                const marker = lowerBound + (i * markerDifference);
                sterilisedInputs[variableName] = marker;

                try {
                    results = calculation.run(sterilisedInputs);
                }
                catch (err) {
                    // handle calculation errors
                    results.optimizationValue = Number.POSITIVE_INFINITY;
                }

                // handle if the calculation caught known errors
                if (results.errors.length > 0) {
                    results.optimizationValue = Number.POSITIVE_INFINITY;
                }

                // check if the current marker is now the closest one
                const difference = Math.abs(results.optimizationValue - goal);

                if (difference <= closest.difference) {
                    closest.index = i;
                    closest.difference = difference;
                    closest.value = marker;
                }

                // check if a solution has been found
                if (difference <= threshold) {
                    break;
                }
            }

            if (debug === true) {
                str += `index = ${  closest.index  } of ${  markerCount - 1}`;
                str += `, diff = ${  closest.difference  }\n`;
                alert(str);
            }

            // check if a solution has been found
            if (closest.difference <= threshold) {
                found = true;
                sterilisedInputs[variableName] = closest.value;
                break;
            }

            // set new bounds based on closest marker
            if (closest.index === 0) {
                upperBound = lowerBound + markerDifference;
            }
            else if (closest.index === (markerCount - 1)) {
                lowerBound = upperBound - markerDifference;
            }
            else {
                lowerBound += ((closest.index - 1) * markerDifference);
                upperBound = lowerBound + ((closest.index + 1) * markerDifference);
            }

            iteration += 1;
        }
    }

    // return results
    results.goalSeekFailureMessage = "No solution found (max iterations reached).";
    results.goalSeekSuccess = found;
    return results;
};

export {Helper}
