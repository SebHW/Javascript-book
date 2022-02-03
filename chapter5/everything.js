function every(array, test) {
    // Your code here.
    //console.log(array.length)
    for (let i = 0; i < array.length; i++) {
        //console.log(test(array[i]))
        if (!test(array[i])) {
            return (false);
        }
    }
    return(true);
}

function everyWithSome(array, test) {
    //.some checks that at least one passes the test
    //So test if any fail, if one fails then the some comes back true
    //Thus need to flip the some response too as it says true, 
    //one of the entries does not meet the criterea
    return(!array.some(x=>!test(array[array.indexOf(x)])))
}

console.log(every([1, 3, 5], n => n < 10));
console.log(everyWithSome([1, 3, 5], n => n < 10));
// → true
//console.log(every([2, 4, 16], n => n < 10));
//console.log(everyWithSome([2, 4, 16], n => n < 10));
// → false
//console.log(every([], n => n < 10));
//console.log(everyWithSome([], n => n < 10));
// → true