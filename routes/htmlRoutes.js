const path = require("path");

module.exports = function(app) {

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    console.log("hello");  
 });

 app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
    console.log("hello hello");
 });

};