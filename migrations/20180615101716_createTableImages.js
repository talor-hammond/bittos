
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', table => {
      table.increments('id')
      table.string('title')
      table.string('description')
      table.string('url')
      table.integer('artist_id')
      table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('images')
};
