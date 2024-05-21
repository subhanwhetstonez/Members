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

export default async function isnert(req, res) {
  let firstName = req.body.first_name;
  let lastName = req.body.last_name;
  let Email = req.body.email;
  let Gender = req.body.gender;
  await pool.query(
    `INSERT INTO person (first_name, last_name, email, gender) VALUES (${
      (firstName, lastName, Email, Gender)
    }) RETURNING * `
  );
}
