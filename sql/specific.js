const pool = require("../dbc.js");

//Get One Person
exports.getOnePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const onePerson = await pool.query("SELECT * FROM person WHERE id = $1", [
      id,
    ]);
    res.json(onePerson.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};
