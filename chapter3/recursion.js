// Your code here.
function isEven(x) {
    if (x < 0) {
        x = -x
        return isEven(x)
    }
    else if (x == 0) {
        return true;
    }
    else if (x == 1) {
        return false;
    }
    else {
        return isEven(x - 2)
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-2));
  // → ??