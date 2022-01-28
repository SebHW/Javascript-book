hash = "# # # #"
space = " "
for(let x = 1; x<=8; x+=1){
  if(x%2==0){
    console.log(hash+space)
  }
  else{
    console.log(space+hash)
  }
}

/* OFFICIAL SOLUTION
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
*/