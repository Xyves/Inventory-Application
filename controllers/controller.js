const db = require("../db/query");
async function getIndex(req, res) {
  res.render("index.ejs", { title: "Home page" });
}
async function getGames(req, res) {
  const games = await db.getGames();

  res.render("sites/games.ejs", {
    title: "List of Games",
    games: games,
  });
}
async function getCategories(req, res) {
  const categories = await db.getCategories();
  console.log(categories);
  res.render("sites/categories.ejs", {
    title: "Categories",
    categories: categories,
  });
  // const filtered = categories.map((category) => category.name);
  // res.send("Categories: " + filtered);
}
async function getDevelopers(req, res) {
  const developers = await db.getDevelopers();

  res.render("sites/developers.ejs", {
    title: "List of Developers",
    developers: developers,
  });
}

async function getGame(req, res) {
  const game = await db.getGame(req.params.id);
  console.log(game[0]);
  res.render("sites/game.ejs", { title: game.title, game: game[0] });
}
async function getDeveloper(req, res) {
  const developer = await db.getDeveloper(req.params.id);
  res.render("sites/developer.ejs", {
    title: "List of Developers",
    name: developer[0].name,
  });
}
async function getCategory(req, res) {
  const category = await db.getCategory(req.params.id);
  console.log(category[0].name);
  res.render("sites/category.ejs", {
    title: category.name,
    name: category[0].name,
  });
}

async function getCreateGame(req, res) {
  const categories = await db.getCategories();
  const developers = await db.getDevelopers();
  res.render("forms/create/createGame", {
    categories: categories,
    developers: developers,
  });
}
async function getCreateDeveloper(req, res) {
  res.render("forms/create/createCategory");
}
async function getCreateCategory(req, res) {
  res.render("forms/create/createCategory");
}

async function postCreateGame(req, res) {
  console.log(req.body);
  const { gameName, category, developer, release_date } = req.body;
  console.log(gameName, category, developer, release_date);
  db.postCreateGame(gameName, category, developer, release_date);
  res.redirect("sites/games");
}
async function postCreateDeveloper(req, res) {
  console.log(req.body);

  const { developerName } = req.body;
  await db.postCreateDeveloper(developerName);
  res.redirect("/developers");
}
async function postCreateCategory(req, res) {
  const { categoryName } = req.body;
  await db.postCreateCategory(categoryName);
  res.redirect("sites/categories");
}

async function getEditGame(req, res) {
  const game = await db.getGame(req.params.id);
  const categories = await db.getCategories();
  const developers = await db.getDeveloper();
  console.log(req.params.id);
  res.render("forms/edit/editGame", {
    title: game.name,
    game: game,
    categories: categories,
    developers: developers,
  });
  // db.editGame();
  // res.redirect;
}
async function getEditDeveloper(req, res) {
  const developer = await db.getDeveloper(req.params.id);
  console.log(developer);
  res.render("forms/edit/editDeveloper", {
    title: developer.name,
    developer: developer,
  });
}
async function getEditCategory(req, res) {
  const category = await db.getCategory(req.params.id);
  console.log(category);
  res.render("forms/edit/editCategory", {
    title: category.name,
    category: category,
  });
}
async function postEditGame(req, res) {
  db.editGame(id);
  res.redirect(`/game/${id}`);
}
async function postEditDeveloper(req, res) {
  db.editGame(id);
  res.redirect(`/developer/${id}`);
}
async function postEditCategory(req, res) {
  db.editGame(id);
  res.redirect(`/category/${id}`);
}
async function getDeleteGame(req, res) {
  db.deleteGame(req.id);
  res.redirect("/games");
}
async function getDeleteDeveloper(req, res) {
  db.deleteDeveloper();
  res.redirect("/developers");
}
async function getDeleteCategory(req, res) {
  db.deleteCategory();
  res.redirect("/categories");
}
module.exports = {
  getGame,
  getCategories,
  getGames,
  getDevelopers,
  getGame,
  getCategory,
  getDeveloper,
  getDeleteGame,
  getDeleteCategory,
  getDeleteDeveloper,
  getCreateGame,
  getCreateCategory,
  getCreateDeveloper,
  getIndex,
  getEditCategory,
  getEditGame,
  getEditDeveloper,
  postEditCategory,
  postEditGame,
  postEditDeveloper,
  postCreateGame,
  postCreateCategory,
  postCreateDeveloper,
};
