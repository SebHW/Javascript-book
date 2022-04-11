// Get a reference to the DOM nodes we need
let fileRadioList = document.getElementById("filesContainer");
let fileSelectList = document.getElementById("fileSelectList");
let submitButton = document.getElementById("submit")
let fileEditor = document.getElementById("file");

// This loads the initial file list from the server
fetch("/").then(resp => resp.text()).then(files => {
    // fetches the files and converts their names to 
    // text and loops over them.
    //console.log(files);
    files = files.split("\n");
    let n = 0;
    /*
    Tried using Radio buttons for the way to select a file, doesn't really work
    for (let file of files) {
        let fileRadioListRadioElement = document.createElement("input");
        fileRadioListRadioElement.type ="radio";
        fileRadioListRadioElement.name = "fileSelected"
        fileRadioListRadioElement.id = file;
        if (n=0){
            fileRadioListRadioElement.defaultChecked;
            //console.log("checked");
            n++;
        }
        //let fileRadioListNameElement = document.createElement("label");
        //fileRadioListNameElement.textContent = file;
        //fileRadioListNameElement.htmlFor = file;
        fileRadioList.appendChild(fileRadioListRadioElement);
        //fileRadioList.innerHTML = file;
        //fileRadioList.appendChild(fileRadioListNameElement);
        fileRadioList.appendChild(document.createElement("br"));
        
    }
    */
   //Used Select list instead
   for (let file of files) {
       let fileOption = document.createElement("option")
       fileOption.text = file;
       fileSelectList.appendChild(fileOption);
   }
});

// Adds event to the drop down so that when one is picked it opens it in
// the editor area.
fileSelectList.addEventListener("change", function() {
    fetch(fileSelectList.value).then(resp => resp.text()).then(file => {
        fileEditor.value = file;
      });
});

//Add event to the submit button so when clicked the file is saved and 
// default values are returned to the textarea and the drop down.
submitButton.addEventListener("click", function() {
    // uses the PUT method defined in file_server.js
    fetch(fileSelectList.value, {method: "PUT", body: fileEditor.value});
    fileSelectList.value="";
    fileEditor.value = "";
})


