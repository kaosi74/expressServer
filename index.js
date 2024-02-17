import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var fName = "";
var lName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function nameGenerator(req, res, next) {
    console.log(req.body);
    fName = req.body["fName"];
    lName = req.body["lName"]
    next();
}
app.use(nameGenerator);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/login", (req, res) => {
    console.log(req.body);
res.send(`<h1>Your First Name is ${fName}</h1> \n <h2>Your Last Name is ${lName} </h2>`)
});

app.listen(port, ()=> console.log(`Server is running on port ${port}`))