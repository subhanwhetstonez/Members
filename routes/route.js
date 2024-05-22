const express = require("express");
const router = express.Router();
// const express = require("express");
// const app = express();
const create = require("../Services/create");
const display = require("../Services/display");
const specific = require("../Services/specific");
const update = require("../Services/update");
const del = require("../Services/del");

//URL Access

router.use(function (req, res, next) {
  console.log(req.url, "@", Date.now());
  next();
});

// CRUD Elements

// app.post("/person", create.createPerson);
// app.get("/person", display.getAllPerson);
// app.get("/person/:id", specific.getOnePerson);
// app.put("/person/:id", update.updateOnePerson);
// app.delete("/person/:id", del.deleteOnePerson);

//Using Functions

router.route("/").get(display).post(create);
router.route("/:id").get(specific).put(update).delete(del);

//USING MODULES

// router.post("/person", create.createPerson);
// router.get("/person", display.getAllPerson);
// router.get("/person/:id", specific.getOnePerson);
// router.put("/person/:id", update.updateOnePerson);
// router.delete("/person/:id", del.deleteOnePerson);

module.exports = router;
