const pool = require("./pool");
async function getGames() {
  const { rows } = await pool.query("SELECT * FROM games");
  console.log(rows);
  return rows;
}
async function getGame(id) {
  const { rows } = await pool.query(`SELECT * FROM games WHERE id = ${id}`);
  return rows;
}

async function getDevelopers() {
  const { rows } = await pool.query("SELECT * FROM developers");
  console.log(rows);
  return rows;
}
async function getDeveloper(id) {
  const { rows } = await pool.query(
    `SELECT * FROM developers WHERE id = ${id}`
  );
  console.log(rows);
  return rows;
}
async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  console.log(rows);
  typeof rows;
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
async function postCreateGame(title, category, developer, date, price) {
  await pool.query(
    "INSERT INTO games(name,category,release_date,developer) VALUES ($1,$2,$3,$4)",
    [title, category, date, developer]
  );
}
async function postCreateCategory(name) {
  await pool.query("INSERT INTO categories(name) VALUES ($1)", [name]);
}
async function postCreateDeveloper(name) {
  await pool.query("INSERT INTO developers(name) VALUES ($1)", [name]);
}

async function editGame(game) {
  const game1 = getGame(game.id);
  await pool.query(
    `UPDATE Games SET name = ${game1.name},category=${game1.category} developer=${game1.developer} `
  );
}
async function editCategory() {}
async function editDeveloper() {}

async function postDeleteGame(id) {
  await pool.query(`DELETE FROM games WHERE id = ${id}`);
}
async function postDeleteCategory() {}
async function postDeleteDeveloper() {}
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
