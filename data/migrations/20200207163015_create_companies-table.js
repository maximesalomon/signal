exports.up = function(knex, Promise) {
  return knex.schema.createTable("companies", tbl => {
    tbl.increments();
    tbl.string("name", 128).unique().notNullable();
    tbl.string("url", 128).unique().notNullable();
    tbl.string("location", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("companies");
};
