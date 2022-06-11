const { Register } = require("../models");
const sequelize = require("sequelize");

class RegisterController {
  async create(req, res) {
    const { option } = req.body;

    if (option === "") {
        return res
          .status(200)
          .json({ error: "Forneça a opção" });
    }

    return await Register.create({ option })
      .then(async (register) => {
        const { id, option, date } = register.get();
        return res.json({ id, option, date });
      })
      .catch((err) => {
        // pega os erros de validação emitidos pelo modelo do Sequelize
        if (err.errors && err.errors.length > 0) {
          return res.status(200).json({ error: err.errors[0].message });
        } else {
          return res.status(200).json({ error: err.message });
        }
      });
  }

  async remove(req, res) {
    let { id } = req.body;
    
    if (id === "") {
      return res
        .status(200)
        .json({ error: "Forneça a identificação" });
    }

    return await Register.findOne({ where: { id } })
      .then(async (register) => {
        if (register !== null) {
          await register.destroy();
          return res.json({ id:register.id, option:register.option, date:register.date });
        } else {
          return res
            .status(200)
            .json({ error: "Registro não identificado" });
        }
      })
      .catch((err) => {
        if (err.errors && err.errors.length > 0) {
          return res.status(200).json({ error: err.errors[0].message });
        } else {
          return res.status(200).json({ error: err.message });
        }
      });
  }

  async list(_, res) {
    return await Register.findAll({
      attributes: ["id", "option","date"],
      order: [["date", "desc"]]
    })
      .then((registers) => {
        return res.json({
          registers: registers
        });
      })
      .catch((e) => {
        return res.status(200).json({ error: e.message });
      });
  }

  async count(_, res) {
    return await Register.count({
      attributes: ["option"],
      group: "option",
      order: [["option", "asc"]]
    })
      .then((registers) => {
        return res.json({
          registers: registers
        });
      })
      .catch((e) => {
        return res.status(200).json({ error: e.message });
      });
  }
}

module.exports = RegisterController;
