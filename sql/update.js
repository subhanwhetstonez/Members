const pool = require("../dbc.js");

//Update a note

exports.updateOnePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, gender } = req.body;

    const updatedPerson = await pool.query(
      "UPDATE person SET first_name = $1, last_name = $2, email = $3, gender = $4 WHERE id = $5 RETURNING *",
      [first_name, last_name, email, gender, id]
    );

    res.json("Person has been updated");
  } catch (err) {
    console.error(err.message);
  }
};
