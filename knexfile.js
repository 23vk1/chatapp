// require('dotenv').config();  // Loads environment variables from .env file

// knexfile.js
require('dotenv').config(); // Load .env file


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',  // PostgreSQL client
    connection: {
      host: process.env.DB_HOST,         // Database host
      user: process.env.DB_USERNAME,      // Database username
      password: process.env.DB_PASSWORD,     // Database password
      database: process.env.DB_DATABASE, // Database name
      port: process.env.DB_PORT || 5432,                // Default PostgreSQL port
    },
    migrations: {
      directory: './migrations',  // Directory for migration files
    },
    seeds: {
      directory: './seeds',  // Directory for seed files
    },
  },

};
