const pool = require("../dbc.js");

//Get all Notes

exports.getAllPerson = async (req, res) => {
  try {
    const allPerson = await pool.query("SELECT * FROM person");
    res.json(allPerson.rows);
  } catch (err) {
    console.error(err.message);
  }
};

async function disco(req, res) {
  console.log("DisPlaY");
  let see = await pool.query("SELECT * FROM person ORDER BY id ASC");
  res.json(see.rows);
}

module.exports = disco;
