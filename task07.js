// We must export the function so the autograder can test it
export function arrayFiltering(array, test) {
  // Create a new array to store the results
  const result = [];

  // Loop through each element of the input array
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    // Call the test function on the element
    if (test(element)) {
      // If test returns true, keep the element
      result.push(element);
    }
  }

  // Return the new filtered array
  return result;
}

