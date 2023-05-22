// dependencies
let wRouter = require("express").Router();
let wPath = require("path");

// GET /notes should return the notes.html file.
wRouter.get("/notes", (req, res) => {
    res.sendFile(wPath.join(__dirname, "../../public/notes.html"));
});

// GET - should return the index.html file.
wRouter.get("*", (req, res) => {
    res.sendFile(wPath.join(__dirname, "../../public/index.html"));
});

module.exports = wRouter;