const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT, // e.g., "postgres"
    logging: false,
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log(" Database connected successfully!");
  } catch (err) {
    console.error(" Unable to connect to database:", err);
  }
}

testConnection();

module.exports = sequelize;
