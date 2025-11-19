/**
 * ---------------------------------------------------------
 * config.js
 * ---------------------------------------------------------
 * This file provides a mock configuration layer for a
 * database connection. It simulates environment variable
 * loading, connection handling, and exportable settings.
 *
 * NOTE:
 * - All values are mock placeholders.
 * - Replace these with real environment variables in
 *   production deployments.
 * ---------------------------------------------------------
 */

/**
 * @typedef {Object} DBConfig
 * @property {string} user - Database username
 * @property {string} password - Database password
 * @property {string} host - Host address for DB service
 * @property {number} port - Port used by the DB server
 * @property {string} database - Database name to connect to
 */

/**
 * Mock credentials and database settings.
 * In real applications, use process.env.* instead.
 * Example:
 *   const db_user = process.env.DB_USER;
 */
const dbConfig = /** @type {DBConfig} */ ({
  user: "admin",
  password: "password123",
  host: "localhost",
  port: 5432,
  database: "mockdb",
});

/**
 * Mock function that pretends to create a DB connection.
 * In production, this would initialize an actual driver
 * such as pg, mysql2, mongoose, etc.
 *
 * @returns {Promise<void>}
 */
async function connectToDatabase() {
  console.log("Attempting mock DB connection...");
  
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log(
    `Connected to database "${dbConfig.database}" at ${dbConfig.host}:${dbConfig.port} as ${dbConfig.user}.`
  );
}

/**
 * Exports for external usage.
 */
module.exports = {
  dbConfig,
  connectToDatabase,
};

// End of config.js
