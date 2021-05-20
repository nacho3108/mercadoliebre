const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3031;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/home.html"));
})

app.get("/register.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/register.html"));
})

app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/login.html"));
})

app.listen(port, () => {
    console.log("El servidor ya está corriendo en el puerto " + port + ".");
})