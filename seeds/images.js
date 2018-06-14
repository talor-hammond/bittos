
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {id: 1, artist_id: 1, title: 'Trauma', description: 'Very traumatic', url: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages5.fanpop.com%2Fimage%2Fphotos%2F30600000%2FRandom-crap-random-30670486-750-574.jpg&f=1'},
        {id: 2, artist_id: 1, title: 'Smug', description: 'Stoked for good reason', url: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IP9vRKzvzk-4ytN8Ahy6GwHaFz%26pid%3D15.1&f=1'},
        {id: 3, artist_id: 3, title: 'Gru', description: 'On a train', url: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.demilked.com%2Fmagazine%2Fwp-content%2Fuploads%2F2018%2F02%2F5a7d5cb504b5d-funny-accidental-cosplay-coverimage3.jpg&f=1'}
      ]);
    });
};
