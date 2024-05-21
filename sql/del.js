const pool = require("../dbc.js");

//Delete a Person

exports.deleteOnePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePerson = await pool.query("DELETE FROM person WHERE id = $1", [
      id,
    ]);
    res.json("Person has been deleted");
  } catch (err) {
    console.error(err.message);
  }
};
