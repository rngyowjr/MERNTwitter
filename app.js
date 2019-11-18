const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./confg/keys").mongoURI

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to mongoDB"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello a/A!")
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});