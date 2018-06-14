
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Stanley Roache', username: 'theroacheapproach69', email: 'stan@stan.com', bio: 'Really tall', avatar_url: 'https://cps-static.rovicorp.com/3/JPG_500/MI0002/422/MI0002422352.jpg?partner=allrovi.com'},
        {id: 2, name: 'Phoenix Stryker', username: 'flamecatcher34', email: 'phoenix@phoenix.com', bio: 'Likes apples', avatar_url: 'https://skateparkoftampa.com/spot/headshots/5572.jpg'},
        {id: 3, name: 'Rebecca Dugdale', username: 'dugrebby1000', email: 'reb@reb.com', bio: 'Accidental shade all day', avatar_url: 'https://media.gettyimages.com/photos/man-upside-down-in-dirt-hole-with-legs-in-the-air-picture-id108000160'},
        {id: 4, name: 'Tay', username: 'rickybobby31', bio: 'Dark secrets', email: 'tay@tay.com', avatar_url: 'https://pbs.twimg.com/profile_images/1264265275/Ricky_Bobby_closeup_400x400.jpg'}
      ]);
    });
};
