module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/signals.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/data/migrations"
    },
  }
};
