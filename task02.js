// We must "export" the function so the tester can use it
// arr1==arr2 if and only if arr1 & arr2 have same length and same elements
export function arraysAreEqual(arr1, arr2) {
    // First check: if lengths are different, arrays can't be equal
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Loop through every element
    for (let i = 0; i < arr1.length; i++) {// start from 0, increase by 1 each time and stop when i bigger than length
        // If one element is different, arrays are not equal
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // If the loop finishes, all elements are equal
    return true;
}

