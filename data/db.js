const knex = require('knex');
const config = require('../knexfile');


const db_config

switch (process.env.NODE_ENV){
  case 'production':
    db_config = config.production;
    break;
  default:
    db_config = config.development
}


const db = knex(db_config);
module.exports = db;