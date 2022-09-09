const express = require('express');
const routes = require('./routes');
const { hasConection } = require('./database');
// const db= require('./database')
const PORT = 3000;


const app = express();
hasConection();
// db.hasConection();


app.use(express.json());
app.use(routes);

app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`));