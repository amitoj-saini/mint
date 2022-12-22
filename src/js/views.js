const fs = require("fs");
const path = require("path");

function open_view(viewfile) {
    if (viewfile.substr(-5) != "html") viewfile += ".html";
    let filename = path.join(__dirname, "views", viewfile);
    document.getElementById("content").innerHTML = fs.readFileSync(filename, "utf8");
}


window.addEventListener("load", (e) => {
    open_view("home");
});