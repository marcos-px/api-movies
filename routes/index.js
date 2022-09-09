const express = require('express');
const genderController = require('../controllers/genderController')
const routes = express.Router();

routes.get("/gender", genderController.listAll);
routes.get("/gender/:id", genderController.getOne);
routes.post("/gender", genderController.createGender);


module.exports = routes;