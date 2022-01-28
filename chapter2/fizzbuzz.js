for (let x = 1; x <= 100; x += 1) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("FizzBuzz")
    }
    else if (x % 3 == 0) {
        console.log("Fizz")
    }
    else if (x % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(x)
    }
}

/* OFFICIAL ANSWER
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}
*/