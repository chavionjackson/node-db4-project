const express = require("express");
const server = express();

const reciperRouter = require("./recipe/recipe-router");
const ingredRouter = require("./ingrdients/ingredients-router");

server.use(express.json());
server.use("/api/ingredients", ingredRouter);
server.use("/api/recipes", reciperRouter);

module.exports = server;
