const Register = require("./Register");

const database = require("../database");

//database.sync({force:true});
database.sync();

module.exports = {
  Register
};