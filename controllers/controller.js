const db = require("../db/query");
async function getIndex(req, res) {
  res.send("index", { title: "Home page" });
}
async function getGames(req, res) {
  const games = db.getGames();
  res.render("sites/games.ejs", { title: "List of Games", games: games });
}
async function getCategories(req, res) {
  const categories = db.getCategories();
  res.render("sites/categories.ejs", {
    title: "Categories",
    categories: categories,
  });
}
async function getDevelopers(req, res) {
  const developers = db.getDevelopers();
  res.render("sites/developers.ejs", {
    title: "List of Developers",
    developers: developers,
  });
}

async function getGame(req, res) {
  const game = db.getGame(id);
  res.render("sites/game.ejs", { title: game.title, game: game });
  res.redirect(`/game/${game.id}`);
}
async function getDeveloper(req, res) {
  const developer = db.getDeveloper(id);
  res.render("sites/developer.ejs", {
    title: "List of Developers",
    developer: developer,
  });
  res.redirect(`/developer/${developer.id}`);
}
async function getCategory(req, res) {
  const category = db.getCategory(id);
  res.render("sites/category.ejs", {
    title: category.name,
    name: category.name,
  });
  res.redirect(`/category/${category.id}`);
}
async function createGame(req, res) {
  const game = db.createGame(title, developer, category, date, price);
  res.redirect(`/game/${game.id}`);
}
async function createDeveloper(req, res) {
  db.createDeveloper(res.game);
  res.redirect(`/game/${developer.id}`);
}
async function createCategory(req, res) {
  db.createCategory(title);
  res.redirect(`/game/${category.id}`);
}

async function getEditGame(req, res) {
  const game = db.getGame(id);
  res.render("/forms/edit/editGame", { title: game.name, game: game });
  // db.editGame();
  // res.redirect;
}
async function getEditDeveloper(req, res) {
  const developer = db.getDeveloper(id);
  res.render("/forms/edit/editDeveloper", {
    title: developer.name,
    developer: developer,
  });
}
async function getEditCategory(req, res) {
  const category = db.getCategory(id);
  const categories = db.getCategories(id);
  res.render("/forms/edit/editCategory", {
    title: category.name,
    category: category,
    categories: categories,
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
  createGame,
  createCategory,
  createDeveloper,
  getIndex,
  getEditCategory,
  getEditGame,
  getEditDeveloper,
  postEditCategory,
  postEditGame,
  postEditDeveloper,
};
