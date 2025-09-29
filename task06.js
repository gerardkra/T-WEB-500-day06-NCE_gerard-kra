// We must export the function so the autograder can test it
export function objectsDeeplyEqual(cmp1, cmp2) {
  // 1. If both values are strictly equal (===), return true
  if (cmp1 === cmp2) {
    return true;
  }

  // 2. If one of them is null OR if their types are different,
  // we can already say they're not equal.
  if (cmp1 === null || cmp2 === null || typeof cmp1 !== "object" || typeof cmp2 !== "object") {
    return false;
  }

  // 3. Both are objects now → we must compare their properties.
  // Get the keys (property names) of each object.
  const keys1 = Object.keys(cmp1);
  const keys2 = Object.keys(cmp2);

  // 4. If objects have a different number of keys, they cannot be equal.
  if (keys1.length !== keys2.length) {
    return false;
  }

  // 5. Loop through the keys of the first object.
  for (let key of keys1) {
    // If the second object does not have this key → not equal
    if (!keys2.includes(key)) {
      return false;
    }

    // If the values of this property are not deeply equal → not equal
    if (!objectsDeeplyEqual(cmp1[key], cmp2[key])) {
      return false;
    }
  }

  // 6. If we checked everything and found no differences → equal
  return true;
}

