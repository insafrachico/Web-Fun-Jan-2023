console.log("page load...");
var requestspan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#username");
var username = document.querySelector("#username");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestspan.innerText--;
    connectionSpan.innerText++;
}

function ignore(id){
    var element = document.querySelector(id);
    element.remove();
    requestspan.innerText--;
}
function edit() {
    username.innerText = "Marissa G";
}