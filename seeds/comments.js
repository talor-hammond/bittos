
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, author_id: 1, comment: 'Um, I really like his facial expression.  I can aspire to it! Yes we can', image_id: 2},
        {id: 2, author_id: 4, comment: 'He\'s so fluffy!!!!', image_id: 3},
        {id: 3, author_id: 2, comment: 'Scar is my favourite character', image_id: 1}
      ]);
    });
};
