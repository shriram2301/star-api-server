const Sequelize = require("sequelize");
const db = require("../../../connect-db");

const Login = db.define("login", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  acl: { type: Sequelize.JSON, allowNull: false },
});

module.exports = Login;
