const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pkRouter = require("./pkRouter");
const typeRouter = require("./typeRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemon", pkRouter);

router.use("/types", typeRouter);

module.exports = router;
