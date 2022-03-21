"use strict";

function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        // Your code here.
        // Establishes a results array
        let results = [];
        let pending = promises.length;
        // Loops through all the promises
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(result => {
                // Resolves one promise and saves result
                results[i] = result;
                pending--;
                // When there are none left, resolve the results.
                if (pending == 0) resolve(results);
            }).catch(reject);
        }
        // All cases are covered with the above except when there 
        // is 0 length array to be resolved
        if (promises.length == 0) {
            resolve(results);
        }
    });
}

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
        console.log("We should not get here");
    })
    .catch(error => {
        if (error != "X") {
            console.log("Unexpected failure:", error);
        }
    });