'use strict'
let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
let sum = 0
let arr2 = arr
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j]
  }
}
console.log(arr);
