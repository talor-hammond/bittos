
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
      table.increments('id')
      table.string('name')
      table.string('username')
      table.string('avatar_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
