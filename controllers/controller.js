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
    title: developer[0].name,
    name: developer[0].name,
    game: game[0],
  });
}
async function getCategory(req, res) {
  const category = await db.getCategory(req.params.id);
  console.log(category[0].name);
  res.render("sites/category.ejs", {
    title: category[0].name,
    name: category[0].name,
    id: category[0].id,
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
  const { id } = req.params;
  const game = await db.getGame(id);

  const categories = await db.getCategories();
  const developers = await db.getDevelopers();

  res.render("forms/edit/editGame", {
    title: game.name,
    game: game,
    categories: categories,
    developers: developers,
    id,
  });
  // db.editGame();
  // res.redirect;
}
async function getEditDeveloper(req, res) {
  const { id } = req.params;
  const developer = await db.getDeveloper(id);
  res.render("forms/edit/editDeveloper", {
    id,
    name: developer.name,
  });
}
async function getEditCategory(req, res) {
  const { id } = req.params;
  const category = await db.getCategory(id);

  res.render("forms/edit/editCategory", {
    id,
    name: category.name,
  });
}
async function postEditGame(req, res) {
  const { id } = req.body;
  console.log(id);
  db.editGame(id);
}
async function postEditDeveloper(req, res) {
  try {
    const { id, developerName } = req.body;
    console.log("Received ID:", id); // Logs the ID received
    console.log("Received developer Name:", developerName); // Logs the developer name received

    // Validation checks
    if (
      !id ||
      isNaN(id) ||
      typeof developerName !== "string" ||
      developerName.trim() === ""
    ) {
      console.error("Invalid input:", { id, developerName });
      return res.status(400).send("Invalid input.");
    }

    const developerId = parseInt(id, 10);
    const developer1 = await db.getDeveloper(developerId);

    if (!developer1) {
      return res.status(404).send("Category not found.");
    }

    await db.editDeveloper(developerId, developerName);
    res.redirect(`/category/${developerId}`);
  } catch (error) {
    console.error("Error updating category:", error.message);
    res.status(500).send("Internal Server Error");
  }
}
async function postEditCategory(req, res) {
  try {
    const { id, categoryName } = req.body;
    console.log("Received ID:", id); // Logs the ID received
    console.log("Received Category Name:", categoryName); // Logs the category name received

    // Validation checks
    if (
      !id ||
      isNaN(id) ||
      typeof categoryName !== "string" ||
      categoryName.trim() === ""
    ) {
      console.error("Invalid input:", { id, categoryName });
      return res.status(400).send("Invalid input.");
    }

    const categoryId = parseInt(id, 10);
    const category1 = await db.getCategory(categoryId);

    if (!category1) {
      return res.status(404).send("Category not found.");
    }

    await db.editCategory(categoryId, categoryName);
    res.redirect(`/category/${categoryId}`);
  } catch (error) {
    console.error("Error updating category:", error.message);
    res.status(500).send("Internal Server Error");
  }
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
