const { Router } = require("express");
const {
  getPksHandler,
  getPkHandler,
  createPkHandler,
} = require("../handlers/pkHandler");

const pkRouter = Router();

pkRouter.get("/", getPksHandler);

pkRouter.get("/:id", getPkHandler);

pkRouter.post("/", createPkHandler);

module.exports = pkRouter;
