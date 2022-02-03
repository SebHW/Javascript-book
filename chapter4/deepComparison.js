// Your code here.
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    else if ((typeof obj1 == "object" && obj1 != null) &&
        (typeof obj2 == "object" && obj2 != null)) {
        if (Object.keys(obj1).length != Object.keys(obj2).length) {
            return false;
        }
        for (let property of Object.keys(obj1)) {
            if (!Object.keys(obj2).includes(property) ||
                !deepEqual(obj1[property], obj2[property])) {
                return false;
            }
        }
    }
    else {
        return true;
    }
}



let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
  // → true