// knex.js
const knex = require('knex');
const knexConfig = require('./knexfile'); // Import knexfile.js

const db = knex(knexConfig.development);  // Use the 'development' environment configuration

module.exports = db; // Export the db instance
