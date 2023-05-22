let wPath = require("path");
let wRouter = require("express").Router();
let wData = require("../../db/db.json");
let {v4: uuidv4} = require("uuid");
let fs = require("fs");

// GET /api/notes
wRouter.get("/notes", (req, res) => {
  console.log({wData});
  res.json(wData);
});

// DELETE /api/notes/:id
// get one specific note, req.body.id, readfile db.json, find entry that matches that id
wRouter.delete("/notes/:id", (req, res) => {
  // rewrite data and return only elements that DON'T match deleted note ID
  wData = wData.filter((el) => el.id !== req.params.id);
  fs.writeFile(
    wPath.join(__dirname, "../../db/db.json"),
    JSON.stringify(wData),
    function (err) {
      if (err) {
        res.status(404).json({ error: err });
      }
      res.json(wData);
    }
  );
});

// POST /api/notes
//   create new UUID, take note out of req.body, apply UUID, save to db.json
wRouter.post("/notes", (req, res) => {
  // spread operator
  let newNote = { ...req.body, id: uuidv4() };
  console.log(newNote);
  console.log(req.body);
  wData.unshift(newNote);
  // joins relative to absolute path
  fs.writeFile(
    wPath.join(__dirname, "../../db/db.json"),
    JSON.stringify(wData),
    function (err) {
      if (err) {
        res.status(404).json({ error: err });
      }
      res.json(wData);
    }
  );
});

module.exports = wRouter;
