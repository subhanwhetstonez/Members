const pool = require("../dbc.js");

// Create a Entry

exports.createPerson = async (req, res) => {
  try {
    const { first_name, last_name, email, gender } = req.body;
    const newEntry = await pool.query(
      `INSERT INTO person (first_name, last_name, email, gender) VALUES (${
        (first_name, last_name, email, gender)
      }) RETURNING * `,
      [first_name, last_name, email, gender]
    );
    res.json(newEntry);
    console.log("Yes");
  } catch (err) {
    console.error(err.message);
  }
};

async function isnert(req, res) {
  let {
    first_name: first_name,
    last_name: last_name,
    email: email,
    gender: gender,
  } = req.body;
  let table = await pool.query(
    `INSERT INTO person (first_name, last_name, email, gender) VALUES ('${first_name}','${last_name}','${email}','${gender}') RETURNING * `
  );
}

module.exports = isnert;
