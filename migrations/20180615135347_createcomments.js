
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
      table.increments('id')
      table.integer('author_id')
      table.string('comment')
      table.integer('image_id')
      table.timestamp('written_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
