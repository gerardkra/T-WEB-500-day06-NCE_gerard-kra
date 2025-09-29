// We must "export" the function so the tester can use it
export function range(start, end, step) {
    // If step is not given, default = 1
    if (step === undefined) {
        step = 1;
    }

    // Create an empty array to store results
    var result = [];

    // If step is positive → count upwards
    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            result.push(i); // add i to the array
        }
    }
    // If step is negative → count downwards
    else {
        for (var i = start; i >= end; i += step) {
            result.push(i); // add i to the array
        }
    }

    // Return the filled array
    return result;
}
