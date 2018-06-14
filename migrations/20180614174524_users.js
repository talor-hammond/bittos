
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
      table.increments('id')
      table.string('name')
      table.string('username')
      table.string('avatar_url')
      table.string('bio')
      table.string('email')
      table.timestamp('member_since').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
