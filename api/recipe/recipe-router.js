const express = require("express");
const router = express.Router();

const Recipe = require("./recipe-model");

router.get("/", (req, res, next) => {
  Recipe.getAllRecipes()
    .then((rec) => {
      res.json(rec);
    })
    .catch(next);
});

router.get("/:id/recipeList", (req, res, next) => {
  const { id } = req.params;
  Recipe.getRecipeList(id)
    .then((rec) => {
      res.json(rec);
    })
    .catch(next);
});

router.get("/:id/steps", (req, res, next) => {
  const { id } = req.params;
  Recipe.getSteps(id)
    .then((step) => {
      res.json(step);
    })
    .catch(next);
});

module.exports = router;
