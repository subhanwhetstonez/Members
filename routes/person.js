const express = require("express");
const router = express.Router();
const create = require("../sql/create");
const display = require("../sql/display");
const specific = require("../sql/specific");
const update = require("../sql/update");
//const del = require("../sql/del");

router.use(function (req, res, next) {
  console.log(req.url, "@", Date.now());
  next();
});

// router.get("/", (req, res) => {
//   "./routes/person.js";
// });

// router.route("/").get((req, res) => {
//   res.send("hi get /person");
// });

router.route("/").get(display).post(create);

router.route("/:id").get(specific); //.put(update)
//.delete(del);

router.route("/:id").put(update);

// router.post("/person", create.createPerson);

// router.get("/person", display.getAllPerson);

// router.get("/person/:id", specific.getOnePerson);

// router.put("/person/:id", update.updateOnePerson);

// router.delete("/person/:id", del.deleteOnePerson);

module.exports = router;
