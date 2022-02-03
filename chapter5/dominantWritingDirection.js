//DOESNT WORK NOT IN THE BOOKON THE INTERNET

function dominantDirection(text) {
    // Your code here.
    let scripts = countBy(text, char => {
      //Finds the current character in the script
      let script = characterScript(char.codePointAt(0));
      //Returns the writing direction or falls back to none if 
      // there isnt a direction as part of the script
      return script ? script.direction : "none";
    //.filter removes the entry for none
    }).filter(({name}) => name != "none");
    //console.log(scripts)
    if (scripts.length == 0) return scripts.name;
    // Calculates which of the two counts was longer, a or b.
    //If a lis longer than b, then scripts is reduced to a and 
    //its name is returned
    return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl