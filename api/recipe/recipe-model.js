const db = require("../../data/db-config");

function getAllRecipes() {
  return db("recipes");
}

function getRecipeList(recipe_id) {
  return db("recipe_ingredients as ri")
    .join("ingredients as i", "ri.ingredient_id", "i.ingredient_id")
    .where("recipe_id", recipe_id)
    .select("ingredient_name as Ingredient", "quantity as Quantity");
}

function getSteps(recipe_id) {
  return db("steps as s")
    .join("recipes as r", "s.recipe_id", "r.recipe_id")
    .where("r.recipe_id", recipe_id)
    .select("step_number as Step", "step_text as ST")
    .orderBy("step_number");
}

module.exports = {
  getAllRecipes,
  getRecipeList,
  getSteps,
};
