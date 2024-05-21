const pool = require("../dbc.js");

// Create a Entry
exports.createPerson = async (req, res) => {
  try {
    const { first_name, last_name, email, gender } = req.body;
    const newEntry = await pool.query(
      "INSERT INTO person (first_name, last_name, email, gender) VALUES($1, $2, $3, $4) RETURNING * ",
      [first_name, last_name, email, gender]
    );
    res.json(newEntry);
    console.log("Yes");
  } catch (err) {
    console.error(err.message);
  }
};

// export default async function isnert(
//   string = [first_name, last_name, email, gender],
//   string1 = [$1, $2, $3, $4]
// ) {
//   await pool.query(
//     `INSERT INTO person (${string1}) VALUES (${string}) RETURNING * `
//   );
// }
