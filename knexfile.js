// Update with your config settings.
require('dotenv').config();  // This loads the variables from .env into process.env

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,          // Or your database host
      user: process.env.DB_USERNAME,       // Replace with your database user
      password: process.env.DB_PASSWORD, // Replace with your database password
      database: process.env.DB_DATABASE,   // Replace with your database name
      port: process.env.DB_PORT,                 // Default PostgreSQL port
    },
    migrations: {
      directory: './migrations',  // Directory for migrations
    },
    seeds: {
      directory: './seeds',       // Directory for seed files
    },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },
  // production: {
  //   client: 'pg',
  //   connection: process.env.DB_CONNECTION, // For production, typically set through environment variables
  //   migrations: {
  //     directory: './migrations',
  //   },
  //   seeds: {
  //     directory: './seeds',
  //   },
  // },
  

};
