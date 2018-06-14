
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Stanley Roache', username: 'theroacheapproach69', avatar_url: 'https://cps-static.rovicorp.com/3/JPG_500/MI0002/422/MI0002422352.jpg?partner=allrovi.com'},
        {id: 2, name: 'Phoenix Stryker', username: 'flamecatcher34', avatar_url: 'https://skateparkoftampa.com/spot/headshots/5572.jpg'},
        {id: 3, name: 'Rebecca Dugdale', username: 'dugrebby1000', avatar_url: 'https://media.gettyimages.com/photos/man-upside-down-in-dirt-hole-with-legs-in-the-air-picture-id108000160'},
        {id: 4, name: 'Tay', username: 'rickybobby31', avatar_url: 'https://pbs.twimg.com/profile_images/1264265275/Ricky_Bobby_closeup_400x400.jpg'}
      ]);
    });
};
