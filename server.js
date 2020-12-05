const express = require("express");

const app = express();
const PORT = 3030;

// Middleware!
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})