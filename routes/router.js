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

appRouter.post("/category/:id/edit", controller.postEditCategory);
appRouter.post("/developer/:id/edit", controller.postEditDeveloper);
appRouter.post("/game/:id/edit", controller.postEditGame);

appRouter.post("./game:id/delete", controller.getDeleteGame);
appRouter.post("./category:id/delete", controller.getDeleteCategory);
appRouter.post("./developer:id/delete", controller.getDeleteDeveloper);
module.exports = appRouter;
