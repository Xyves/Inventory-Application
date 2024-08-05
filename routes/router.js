import { Router } from "express";
const controller = require("../controllers/controller");
Router.get("/", controller.getIndex);
Router.get("/games", controller.getGames);
Router.get("/game/:id", controller.getGame);
Router.get("/category/:id", controller.getCategory);
Router.get("/developer/:id", controller.getDeveloper);
Router.get("/categories", controller.getCategories);
Router.get("/developers", controller.getDevelopers);

Router.get("/category/create", controller.createCategory);
Router.get("/developer/create", controller.createDeveloper);
Router.get("/game/create", controller.createGame);

Router.get("/category/:id/edit", controller.getEditCategory);
Router.get("/developer/:id/edit", controller.getEditDeveloper);
Router.get("/game/:id/edit", controller.getEditGame);

Router.post("/category/create", controller.createCategory);
Router.post("/developer/create", controller.createDeveloper);
Router.post("/game/create", controller.createGame);

Router.post("/category/:id/edit", controller.postEditCategory);
Router.post("/developer/:id/edit", controller.postEditDeveloper);
Router.post("/game/:id/edit", controller.postEditGame);

Router.post("./game:id/delete", controller.getDeleteGame);
Router.post("./category:id/delete", controller.getDeleteCategory);
Router.post("./developer:id/delete", controller.getDeleteDeveloper);
