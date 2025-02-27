// Failed attempt at solving the problem (Too much time on n = 1000)
// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.
// Comment out arr & n to test different examples

// Example 1:
const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 0;
// output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// Example 2:
// const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// const n = 1
// output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

// Example 3:
// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// const n = 2
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const flat = (arr, n) => {
  // safeguard - return arr if n is 0
  if (n === 0) return arr;

  // Create a shallow copy
  let result = arr.slice();

  // Iterate through the array n times
  for (let i = 0; i < n; i++) {
    let temp = [];

    for (let j = 0; j < result.length; j++) {
      if (Array.isArray(result[j])) {
        temp = temp.concat(result[j]);
      } else {
        temp.push(result[j]);
      }
    }
    result = temp;
  }
  return result;
}
console.log(flat(arr, n));
