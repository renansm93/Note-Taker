// dependencies 
let wPath = require("path");
let wRouter = require("express").Router();
let wData = require("../../db/db.json");
let {v4: uuidv4} = require("uuid");
let fs = require("fs");

// GET /api/notes should read the db.json file and return all saved notes as JSON.
wRouter.get("/notes", (req, res) => {
  console.log({wData});
  res.json(wData);
});

// Delete notes and clear them from db.json
wRouter.delete("/notes/:id", (req, res) => {  
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

//Save notes input in db.json
wRouter.post("/notes", (req, res) => {
  let newNote = { ...req.body, id: uuidv4() };
  console.log(newNote);
  console.log(req.body);
  wData.unshift(newNote);
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
