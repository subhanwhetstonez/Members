const express = require("express");
const app = express();
// const create = require("./sql/create");
// const display = require("./sql/display");
// const specific = require("./sql/specific");
// const update = require("./sql/update");
// const del = require("./sql/del");

const personRoute = require("./routes/person");

//middleware
app.use(express.json());
app.use("/person", personRoute);

app.get("/", (req, res) => {
  res.send(
    ` Hello!! <br> USE /person for list <br> USE /person/1 for specific one`
  );
});

// CRUD Elements

// app.post("/person", create.createPerson);
// app.get("/person", display.getAllPerson);
// app.get("/person/:id", specific.getOnePerson);
// app.put("/person/:id", update.updateOnePerson);
// app.delete("/person/:id", del.deleteOnePerson);

// port forward
app.listen(2323, () => {
  console.log("Server Running on PORT 2323");
});
