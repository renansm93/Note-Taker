let wRouter = require("express").Router();
let wPath = require("path");

wRouter.get("/notes", (req, res) => {
    res.sendFile(wPath.join(__dirname, "../../public/notes.html"));
});

wRouter.get("*", (req, res) => {
    res.sendFile(wPath.join(__dirname, "../../public/index.html"));
});

module.exports = wRouter;