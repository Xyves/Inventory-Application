const pool = require("./pool");
async function getGames() {
  const { rows } = await pool.query("SELECT * FROM games ORDER BY id ASC");
  // console.log(rows);
  return rows;
}
async function getGame(id) {
  const { rows } = await pool.query("SELECT * FROM games WHERE id = $1", [id]);
  return rows;
}

async function getDevelopers() {
  const { rows } = await pool.query("SELECT * FROM developers ORDER BY id ASC");
  return rows;
}
async function getDeveloper(id) {
  try {
    if (!id) {
      throw new Error("Developer ID must be provided");
    }
    const { rows } = await pool.query(
      "SELECT * FROM developers WHERE id = $1",
      [id]
    );
    // console.log(rows);
    return rows;
  } catch (err) {
    console.error("Error fetching developer:", err.message);
    throw err;
  }
}
async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM categories ORDER BY id ASC");
  return rows;
}
async function getCategory(id) {
  console.log(id);
  const { rows } = await pool.query(
    `SELECT * FROM categories WHERE id = ${id} `
  );
  console.log(rows);
  return rows;
}
async function postCreateGame(name, category, developer, date, price) {
  await pool.query(
    "INSERT INTO games(name,category,release_date,developer) VALUES ($1,$2,$3,$4)",
    [name, category, date, developer]
  );
}
async function postCreateCategory(name) {
  await pool.query("INSERT INTO categories(name) VALUES ($1)", [name]);
}
async function postCreateDeveloper(name) {
  await pool.query("INSERT INTO developers(name) VALUES ($1)", [name]);
}

async function editGame(name, category, developer, release_date, id) {
  try {
    await pool.query(
      "UPDATE games SET name = $1, category = $2, developer = $3, release_date = $4 WHERE id = $5",
      [name, category, developer, release_date, id]
    );
  } catch (error) {
    console.error("Error executing query:", error.message);
    throw error; // Handle the error as needed
  }
}
async function editCategory(id, newName) {
  await pool.query("UPDATE categories SET name = $1 WHERE id = $2", [
    newName,
    id,
  ]);
}
async function editDeveloper(id, newName) {
  await pool.query("UPDATE developers SET name = $1 WHERE id = $2", [
    newName,
    id,
  ]);
}

async function postDeleteGame(id) {
  await pool.query(`DELETE FROM games WHERE id = $1`, [id]);
}
async function postDeleteCategory(id) {
  await pool.query(`DELETE FROM categories WHERE id = $1`, [id]);
}
async function postDeleteDeveloper(id) {
  await pool.query(`DELETE FROM developers WHERE id = $1`, [id]);
}
module.exports = {
  getGames,
  getGame,
  getDevelopers,
  getDeveloper,
  getCategories,
  getCategory,
  postCreateGame,
  postCreateCategory,
  postCreateDeveloper,
  editGame,
  editCategory,
  editDeveloper,
  postDeleteGame,
  postDeleteCategory,
  postDeleteDeveloper,
};
