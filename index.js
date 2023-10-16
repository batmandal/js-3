// //1
// function mss(array ) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i]
//     }
//     return sum ;
// }
// const arr = [3, 0, 1, 2];
// const yarr = mss(arr);
// console.log("1. " + yarr);

// //2
// function mss1(array ) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i]
//     }
//     return sum / array.length ;
// }
// const arra= [3, 0, 1, 2];
// const yarra = mss1(arr);
// console.log("2. " + yarra);

// //3
// function power(a, b) {
//   let p = 1;
//   for (let i = 1; i <= b; i++) {
//     p = p * a;
//   }
//   console.log("3. " +  p);
// }
// power(2, 5);

// //4
// function maxnumber(Array) {
//     let x = Array[0];
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] > x ) {
//             x = Array[i];
//         }
//     }
//     return x;
// }
// const numbers = [32, 54, 76, 2];
// const ynumber = maxnumber(numbers);
// console.log("4. " + ynumber);

// //5
// function con(str) {
//     let x = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         x = x + str[i];
//     }
//     return x;
// }
// console.log("5. " + con("PinEcone"));

//8
function pyramid(row) {
  for (let i = 0; i < row; i++) {
    let spaces = "";
    for (let j = 0; j < row - i; j++) spaces += " ";
    for (let k = 0; k <= i; k++) spaces += "* ";
    console.log(spaces);
  }
}
pyramid(4);

// //9
// function factorial(n) {
//     let x = 1;
//     for (let i = 1; i <= n ; i++) {
//         x = x * i;
//     }
//     console.log("9. " + x);
// }
// factorial(5)

// //10
// function even(n) {
//     let x = 0;
//     for (let i = 0; i < n; i++) {
//         x = x + 1 ;
//         if (x % 2 == 0) {
//             console.log("6. " + x);
//         }
//     }
// }
// even(10);

// //12
// function prime(n) {
//     if (n < 2) {
//         return "false";
//     }
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return "false";
//         }
//     }
//     return "true";
// }
// console.log("12. " + prime(29));

// //14
// function fibonacci(n) {
//     let x = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         x[i] = x[i-2] + x[i-1];
//     }
//     return x;
// }
// console.log(fibonacci(9));

// 15 [1, 2, 3, 3, 3, 2, 11]

function uniq(arr) {
  const result = [];

  const set = {};

  for (let i = 0; i < arr.length; i++) {
    if (set[arr[i]] === undefined) {
      result.push(arr[i]);
      set[arr[i]] = true;
    }
  }
  return result;
}

console.log("15. " + uniq([1, 2, 3, 3, 3, 2, 11]));
