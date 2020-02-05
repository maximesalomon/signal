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
    tbl.string("location", 128).notNullable();
    tbl.date("first_seen_at").notNullable();
    tbl.date("last_seen_at").notNullable();
    tbl.date("last_processed_at").notNullable();
    tbl.boolean("job_opening_closed").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("signals");
};
