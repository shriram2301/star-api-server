const { Sequelize } = require("sequelize");

// function to create connection

// this is placeholder set up a proper config file with security later
const username = "root";

// putting dummy password as default code for test. DO NOT FORGET to SET PASSWORD in process.env and later to setup config
const password = process.env.password || "1234";
const database = process.env.database || "star";
const config = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = config;
