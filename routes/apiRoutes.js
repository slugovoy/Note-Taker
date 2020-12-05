const tableData = require("../data/tableData");
const waitinglistData = require("../data/waitinglistData");

module.exports = function(app) {

app.get("/api/tables", function(req, res){
   res.json(tableData);
});

app.get("/api/waitlist", function(req, res){
    res.json(waitinglistData);
 });

 app.post("/api/tables", function(req, res){
    console.log(req.body)
    if (tableData.length < 5) {
        tableData.push(req.body);
        res.json(true);
    } 
    else {
        waitinglistData.push(req.body);
        res.json(false);
    }
    res.send()
 });

};