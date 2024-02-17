import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/login", (req, res) => {
    console.log(req.body);
    res.redirect("/seen");
});

app.get("/seen", (req, res) => {
    res.sendFile(__dirname + "/public/web.html")
});

app.listen(port, ()=> console.log(`Server is running on port ${port}`))