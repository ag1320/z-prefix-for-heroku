
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {post_id: 1, title: 'Latin-ish nonsense', body: 'Lorem ipsum dolor sit amet,', user_id: 9000},
        {post_id: 2, title: 'more Latin-ish nonsense', body: 'Lorem ipsum dolor sit amet,', user_id: 9001}
      ]);
    });
};
