async function locateScalpel(nest) {
    // Your code here.
    /*
    let condition = false;
    while (condition == false) {
        let current = nest.name;
        let next = await anyStorage(nest, current, "scalpel");
        if (next == current) {
            condition = true;
            //return current
        }
        current = next;
    }
    */

    let current = nest.name;
    while (nest.name != await anyStorage(nest, current, "scalpel")) {
        current = await anyStorage(nest, current, "scalpel");
    }
    return current;
}

function locateScalpel2(nest) {
    // Your code here.
    function recursive(current) {
        return anyStorage(nest, current, "scalpel").then(next => {
            if (next == current) return current;
            else return recursive(next);
        });
    }
    return recursive(nest.name);
}

locateScalpel(bigOak).then(console.log);
// → Butcher Shop
locateScalpel2(bigOak).then(console.log);