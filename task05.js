// Define the function in ES5 style
function range(start, end, step) {
    // Default step = 1 if not given
    if (step === undefined) {
        step = 1;
    }

    var result = [];

    // Step > 0 → count upwards
    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            result.push(i);
        }
    }
    // Step < 0 → count downwards
    else {
        for (var i = start; i >= end; i += step) {
            result.push(i);
        }
    }

    return result;
}

// ES5 style export
module.exports = { range };
