// We must "export" the function so the tester can use it
// If n is divisible by p, then the rest of the ecludian division of n by p is equal 0 which means n=p*q+0 where q is the quotient and O the rest.
// .psuh() is the analogy of .happend() in python
// '===' is strictly equal, more robust when comparing whethe 2 numbers are equal or not.
// This works for numbers, strings, booleans, and also for
// when two variables reference the exact same object in memory.
export function fizzBuzz(num) {
    // We create an empty array to store results
    let result = [];

    // Loop from 1 up to num
    for (let i = 1; i <= num; i++) {
        // If divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        }
        // If divisible by 3 only
        else if (i % 3 === 0) {
            result.push("Fizz");
        }
        // If divisible by 5 only
        else if (i % 5 === 0) {
            result.push("Buzz");
        }
        // Otherwise, just add the number
        else {
            result.push(i);
        }
    }

    // Print the array as a comma-separated string
    console.log(result.join(", "));
}


