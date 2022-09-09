const Sequelize = require("sequelize");

const DB_NAME = "movies";
const DB_USER = "root";
const DB_PASS = "mysql";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

// objeto para guardar a conexão do banco dados
let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Erro ao tentar uma conexão com banco dados.");
}

async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco dados conectado com sucesso!");
  } catch (error) {
    console.error("Erro ao tentar se conectar ao banco de dados na autenticação.");
  }
}

Object.assign(db, {
  hasConection,
});

module.exports = db;
