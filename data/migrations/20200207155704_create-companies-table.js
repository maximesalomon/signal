exports.up = function(knex, Promise) {
  return knex.schema.createTable("companies", tbl => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
    tbl.string("url", 128)
    tbl.string("location", 128)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("companies");
};
