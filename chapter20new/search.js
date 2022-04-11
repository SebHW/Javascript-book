const {readFileSync} = require("fs");

let searchTerm = new RegExp(process.argv[2]);

// Not sure why this doesnt log the file name in the console.

function search(file) {
    if (searchTerm.test(readFileSync(file, "utf8"))) {
        console.log(file);
    }
}

for (let arg of process.argv.slice(3)) {
    search(arg);
}