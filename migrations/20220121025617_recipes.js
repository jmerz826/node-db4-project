exports.up = async function(knex) {
    await knex.schema.createTable('recipes', table => {
        table.increments('recipe_id')
        table.text('recipe_name', 128).notNullable().unique()

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipes')
};
