// Your code here.
let documentTypes = ["text/plain", "text/html", "application/json", "application/rainbows+unicorns"];
for (let document of documentTypes) {
    fetch("https://eloquentjavascript.net/author", {headers: {Accept: media}})
        .then(response => response.text())
        .then(text => console.log(`Media Type: ${media}\nContent:\n${text}\n\n`))
        .catch(err => console.error(`Something unexpected happened... ERROR: ${err}`));
}
// Even with the bogus document type the fetch still returns some text
// It is just html filled with error cores