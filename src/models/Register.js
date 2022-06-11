const { DataTypes } = require("sequelize");
const database = require("../database");
const moment = require('moment');

const Register = database.define(
	"register",
	{
		id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
		},
		option: {
			type: DataTypes.STRING,
			allowNull: false
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
			get() {
				return moment(this.getDataValue('date')).format('DD/MM/YYYY HH:mm:ss');
			}
		}
	}
);

module.exports = Register;
