const { Sequelize } = require("sequelize");

// function to create connection

// this is placeholder set up a proper config file with security later

// putting dummy password as default code for test. DO NOT FORGET to SET PASSWORD in process.env and later to setup config

const config = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
  }
);

module.exports = config;
