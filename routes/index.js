const route = require('express').Router();
const control = require('../controllers')

route.get('/planets', control.getPlanets );
route.get('/planets/:id', control.getPlanetById );

module.exports = route;