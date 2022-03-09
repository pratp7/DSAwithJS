//print names 5 times----------
function namePrint(count) {
  if (count === 5) return;

  console.log("Prat");
  namePrint(count + 1);
}
let count = 0;

// namePrint(count);

//print linearly from 1 to N------------------
function printN(counter, n) {
  if (counter > n) return;
  console.log(counter);

  printN(counter + 1, n);
}

// printN(1, 6);

// let i =1;
// function print(i){
//   if(i>7) return;
//  console.log(i);
//   print(i+1);
//
// }

// print(i)

// print linearly from N to 1--------------
function printNrev(counter, n) {
  if (counter < 1) return;
  console.log(counter);
  printNrev(counter - 1, n);
}

// printNrev(6, 6);

// let i =1;
// function print(i){
//   if(i>7) return;

//   print(i+1);
//   console.log(i);
// }

// print(i)
//sum of first n numbers--------------------------------
//parametrised
function sumFirst(n, sum) {
  if (n < 1) {
    console.log(sum);
    return;
  }
  sumFirst(n - 1, sum + n);
}

// sumFirst(5, 0);
// -------------------------------------
// functional approach
function sumFir(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumFir(n - 1);
}

// console.log(sumFir(5));

// reverse an array using recursion-----------------

function revArr(l, r) {
  if (l >= r) return;

  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;

  revArr(l + 1, r - 1);
}
// let arr = [2, 4, 5, 6];
// revArr(0, arr.length - 1);

// console.log(arr);

// reverse an array -----------------------------------------------------------------------
// let arr = [1,2,3,4] ;
// let j=0;
// for(let i = arr.length-1; i>=0;i--){
//   if(i>j){
//   let temp = arr[i];
//   arr[i]= arr[j];
//   arr[j]= temp;
//   j++;
//   }else{
//     break;
//   }
// }

// console.log(arr);

// reversing an array with one pointer recursion----------------------------------------------------------
function revArr(l) {
  if (l >= arr.length / 2) return;

  let temp = arr[l];
  arr[l] = arr[arr.length - 1 - l];
  arr[arr.length - 1 - l] = temp;

  revArr(l + 1);
}
// let arr = [2, 4, 5, 6];
// revArr(0);

// console.log(arr);

//check whether the string is palindorome or not----------------------------
let str = "madam";
function palindrome(l) {
  if (l > str.length / 2) return true;

  if (str[l] === str[str.length - 1 - l]) {
    return palindrome(l + 1);
  } else {
    return false;
  }
}

// console.log(palindrome(0));

//fibonacci using recursion -------------------------------------
function fibo(n) {
  if (n <= 1) return n;

  return fibo(n - 1) + fibo(n - 2);
}
//0,1,1,2,3,5,8
console.log(fibo(6));
