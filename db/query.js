async function getGames() {
  const { rows } = await pool.query("SELECT * FROM games");
  return rows;
}
async function getGame(id) {
  const { rows } = await pool.query(`SELECT * FROM games WHERE id = ${id}`);
  return rows;
}

async function getDevelopers() {
  const { rows } = await pool.query("SELECT * FROM developers");
  return rows;
}
async function getDeveloper(id) {
  const { rows } = await pool.query(
    `SELECT * FROM developers WHERE id = ${id}`
  );
  return rows;
}
async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}
async function getCategory() {
  const { rows } = await pool.query(
    `SELECT * FROM categories WHERE id = ${id} `
  );
  return rows;
}
async function postCreateGame(title, category, date, price, developer) {
  await pool.query(
    "INSERT INTO games(title,category,date,price,developer) VALUES ($1,$2,$3,$4,$5)",
    [title, category, date, price, developer]
  );
}
async function postCreateCategory(name) {
  await pool.query("INSERT INTO genres(name) VALUES ($1)", [name]);
}
async function postCreateDeveloper() {
  await pool.query("INSERT INTO developers(developer) VALUES ($1)", [
    developer,
  ]);
}

async function editGame(game) {
  const game = getGame(game.id);
  await pool.query(
    `UPDATE Games SET name = ${game.name},category=${game.category} developer=${game.developer} `
  );
}
async function editCategory() {}
async function editDeveloper() {}

async function postDeleteGame(id) {
  await pool.query(`DELETE FROM games WHERE id = ${id}`);
}
async function postDeleteCategory() {}
async function postDeleteDeveloper() {}
