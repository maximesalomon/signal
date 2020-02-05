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
};