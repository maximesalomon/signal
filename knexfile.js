module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/signals.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: true
  },
  migrations: {
    directory: __dirname + "./data/migrations"
  },
  seeds: {
    directory: __dirname + "./data/seeds/production"
  }
};
