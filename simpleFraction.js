function fractionToDecimal(numerator, denominator) {
  //code here
  let res = numerator / denominator;
  let rem = numerator % denominator;

  let arr = [];

  arr.push(parseInt(numerator / denominator));

  if (rem === 0) return String(res);
  arr.push(".");

  let obj = new Object();

  while (rem !== 0) {
    if (obj.hasOwnProperty(rem)) {
      arr.splice(obj[rem], 0, "(");
      arr.push(")");
      break;
    }

    obj[rem] = arr.length;
    rem *= 10;
    arr.push(parseInt(rem / denominator));
    rem %= denominator;
  }

  return arr.join("");
}

console.log(fractionToDecimal(1, 3));
console.log(fractionToDecimal(5, 2));
console.log(fractionToDecimal(15, 13));
console.log(fractionToDecimal(16, 8));
