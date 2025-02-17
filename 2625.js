// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// Example 1:
// const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const n = 0;
// output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// Example 2:
const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
const n = 1
// output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

// Example 3:
// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// const n = 2
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const flat = (arr, n) => {
  // Safeguard
  if (n === 0) return arr;
  
  let result = [];
  // console.log(result);

  // loop through depth
  // for (let i = 0; i < n; i++) {
  //   // Loop through the result array
  //   for (let j = 0; j < result.length; j++) {
  //     // If the index is an array, loop through it and push the elements
  //     if (Array.isArray(result[j])) {
  //       for (let k = 0; k < j.length; k++) {
  //         result.push(j[k]);
  //     }
  //     result.push(j);
  //   }
  // }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (Array.isArray(j)) {
        console.log(j);
      }
      // result.push(j);
      console.log(j);
    }
  }

  return result;
};


console.log( flat(arr, n) );
