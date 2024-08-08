const express = require("express");
const app = express();
const usersRouter = require("./routes/router");
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", usersRouter);
app.use(express.static(__dirname + "/public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
