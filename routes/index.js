const route = require ('express').Router();
const control = require('../controllers');
const {idValidationRules,infoPlanetValidationRules, validate } = require('../validator.js');

route.get('/planets', control.getPlanets );
route.get('/planets/:id',idValidationRules(),validate, control.getPlanetById );
route.post('/planets', infoPlanetValidationRules(), validate, control.postPlanet);
route.put('/planets/:id',idValidationRules(), infoPlanetValidationRules(), validate, control.putPlanet);
route.delete('/planets/:id',idValidationRules(),validate, control.deletePlanet);

module.exports = route;