const knex = require('knex');
const config = require('../knexfile');

switch (process.env.NODE_ENV){
  case 'production':
    const db_config = config.production;
    break;
  default:
    const db_config = config.development
}


const db = knex(db_config);
module.exports = db;