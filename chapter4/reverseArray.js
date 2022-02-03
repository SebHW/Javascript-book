// Your code here.
function reverseArray(array) {
    let reversedArray = []
    for (let element of array) {
        reversedArray.unshift(element);
    }
    return reversedArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        element = array[i]
        swapIndex = array.length - 1 - i
        array[i] = array[swapIndex]
        //[array[i], array[swapIndex]]=[array[swapIndex], array[i]]
        array[swapIndex] = element
    }
    return (array);
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
  // → [5, 4, 3, 2, 1]