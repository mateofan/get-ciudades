const { Router } = require('express');
const enrutador = Router();
const ciudades = require('./ciudades.json');

enrutador.get('/getAllCities', (req, res) => {
    res.json(ciudades);


})


module.exports = enrutador;