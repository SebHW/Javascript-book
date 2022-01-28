// Your code here.
function countBs(string) {
    count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "B") {
            count++
        }
    }
    return count;
}

function countChar(string, character) {
    count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == character) {
            count++
        }
    }
    return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
  // → 4