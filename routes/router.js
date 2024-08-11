const { Router } = require("express");
const controller = require("../controllers/controller");
const appRouter = Router();
appRouter.get("/", controller.getIndex);
appRouter.get("/games", controller.getGames);

appRouter.get("/categories", controller.getCategories);
appRouter.get("/developers", controller.getDevelopers);

appRouter.get("/category/create", (req, res) => {
  res.render("forms/create/createCategory");
});
appRouter.get("/developer/create", (req, res) => {
  res.render("forms/create/createDeveloper");
});
appRouter.get("/game/create", controller.getCreateGame);
appRouter.get("/category/create", controller.getCreateCategory);
appRouter.get("/developer/create", controller.getCreateDeveloper);

appRouter.get("/category/:id/edit", controller.getEditCategory);
appRouter.get("/developer/:id/edit", controller.getEditDeveloper);
appRouter.get("/game/:id/edit", controller.getEditGame);

appRouter.get("/game/:id", controller.getGame);
appRouter.get("/category/:id", controller.getCategory);
appRouter.get("/developer/:id", controller.getDeveloper);
appRouter.post("/category/create", controller.postCreateCategory);
appRouter.post("/developer/create", controller.postCreateDeveloper);
appRouter.post("/game/create", controller.postCreateGame);

appRouter.post("/category/edit", controller.postEditCategory);
appRouter.post("/developer/edit", controller.postEditDeveloper);
appRouter.post("/game/edit", controller.postEditGame);

appRouter.post("/game/:id/delete", controller.DeleteGame);
appRouter.post("/category/:id/delete", controller.DeleteCategory);
appRouter.post("/developer/:id/delete", controller.DeleteDeveloper);
module.exports = appRouter;
