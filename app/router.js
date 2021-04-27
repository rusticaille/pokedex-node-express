const express = require('express');
const router = express.Router();

const mainController = require('./mainController');

router.get('/', mainController.homePage);

router.get('/pokemon/:number', mainController.pokemonCard);

router.get('/types', mainController.pokemonType);

router.get('/pokemons/:type', mainController.pokemonByType);

module.exports = router;