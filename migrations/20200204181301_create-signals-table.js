exports.up = function(knex, Promise) {
  return knex.schema.createTable("signals", tbl => {
    tbl.increments();
    tbl
      .text("uuid", 128)
      .unique()
      .notNullable();
    tbl.text("title", 128).notNullable();
    tbl.text("url", 128).notNullable();
    tbl.text("location", 128);
    tbl.text("first_seen_at", 128);
    tbl.text("last_seen_at", 128);
    tbl.text("last_processed_at", 128);
    tbl.boolean("job_opening_close").notNullable();
    tbl.decimal("budget").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("signals");
};
