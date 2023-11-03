const route = require ('express').Router();
const control = require('../controllers');
const {ensureAuth, ensureGuest} = require('../middlewere/auth')
const {idValidationRules,infoPlanetValidationRules, validate } = require('../validator.js');

route.get('/planets/loginView', ensureGuest, (req,res) => {res.render('login')});
route.get('/planets/addView',ensureAuth, (req,res) => {res.render('addView')});
route.get('/planets/all', ensureAuth, control.getPlanets );
route.get('/planets/updatePlanet/:id',ensureAuth, ensureAuth, idValidationRules(),validate, control.updatePlanet );
route.get('/planets/:id',ensureAuth,idValidationRules(),validate, control.getPlanetById );
route.post('/planets', infoPlanetValidationRules(), validate, control.postPlanet);
route.put('/planets/:id',idValidationRules(), infoPlanetValidationRules(), validate, control.putPlanet);
route.delete('/planets/deletePlanet/:id',idValidationRules(),validate, control.deletePlanet);

module.exports = route;