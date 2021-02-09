const { Sequelize } = require("sequelize");

// function to create connection
export const setupDB = async () => {
  // this is placeholder set up a proper config file with security later
  const username = "root";
  console.log(username);
  // putting dummy password as default code for test. DO NOT FORGET to SET PASSWORD in process.env and later to setup config
  const password = process.env.password || "1234";
  const database = process.env.database || "star";
  const sequelize = new Sequelize(database, username, password, {
    host: "localhost",
    dialect: "mysql",
  });
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
