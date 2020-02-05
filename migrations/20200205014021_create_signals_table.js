exports.up = function(knex, Promise) {
  return knex.schema.createTable("signals", tbl => {
    tbl.increments();
    tbl
      .string("uuid", 128)
      .unique()
      .notNullable();
    tbl.string("company", 128).notNullable();
    tbl.string("title", 128).notNullable();
    tbl.string("url", 128).notNullable();
    tbl.string("location", 128);
    tbl.string("first_seen_at", 128);
    tbl.string("last_seen_at", 128);
    tbl.string("last_processed_at", 128);
    tbl.boolean("job_opening_close").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("signals");
};