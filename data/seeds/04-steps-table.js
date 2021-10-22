exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function () {
      return knex("steps").insert([
        {
          recipe_id: 1,
          step_text: "Put mustard on bread",
          step_number: 1,
        },
        {
          recipe_id: 1,
          step_text: "Put ham and rest of ingridient in",
          step_number: 2,
        },
        {
          recipe_id: 1,
          step_text: "Toast",
          step_number: 3,
        },
        {
          recipe_id: 2,
          step_text: "cook platain into slices",
          step_number: 1,
        },
        {
          recipe_id: 2,
          step_text: "add steack and condiments",
          step_number: 2,
        },
        {
          recipe_id: 2,
          step_text: "Toast",
          step_number: 3,
        },
        {
          recipe_id: 3,
          step_text: "cook steak with cheese together",
          step_number: 1,
        },
        {
          recipe_id: 3,
          step_text: "put steak and condiments on bread",
          step_number: 2,
        },
        {
          recipe_id: 3,
          step_text: "Toast",
          step_number: 3,
        },
      ]);
    });
};
