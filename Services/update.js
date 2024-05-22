const pool = require("../dbc.js");

//Update a note

exports.updateOnePerson = async (req, res) => {
  console.log("Here");
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

async function change(req, res) {
  const personId = req.params.id;
  console.log(personId, "Got");
  let {
    first_name: first_name,
    last_name: last_name,
    email: email,
    gender: gender,
  } = req.body;
  let result = await pool.query(
    ` UPDATE person SET first_name = '${first_name}', last_name = '${last_name}', email = '${email}', gender = '${gender}' WHERE id = ${personId} RETURNING *`
  );
  res.json(result);
}

console.log("THERE");
module.exports = change;
