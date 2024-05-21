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

async function dele(req, res) {
  let personId = req.params.id;
  await pool
    .query(`DELETE FROM person WHERE id = ${personId}`)
    .then(res.json("Person has been deleted"));
}

module.exports = dele;
