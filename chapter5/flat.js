let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
//console.log(arrays.reduce((total, current) => total + current));
const flat = arrays.reduce((total, current)=> {
  return total.concat(current);
})
console.log(flat);
// → [1, 2, 3, 4, 5, 6]