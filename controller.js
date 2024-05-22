const express = require("express");
const app = express();

const personRoute = require("./routes/route");

//middleware
app.use(express.json());
app.use("/person", personRoute);

app.get("/", (req, res) => {
  res.send(
    ` Hello!! <br> USE /person for list <br> USE /person/1 for specific one`
  );
});

// port forward
app.listen(2323, () => {
  console.log("Server Running on PORT 2323");
});
