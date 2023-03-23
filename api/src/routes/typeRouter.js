const { Router } = require("express");
const { getTypeHandler } = require("../handlers/typeHanler");

const typeRouter = Router();

typeRouter.get("/", getTypeHandler);

module.exports = typeRouter;
