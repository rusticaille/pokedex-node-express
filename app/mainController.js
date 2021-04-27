const dataMapper = require('./dataMapper');

const mainController = {
    homePage: (req,res) => {
        dataMapper.getAllPokemons((error, result) => {
            if(error){
                console.log('erreur dans homepage:', error)
            }else {
                const pokemonsFromdatabase = result.rows;
                res.render('home', {
                    pokemons : pokemonsFromdatabase,
                });
            }
        })
    },

    pokemonCard: (req, res) => {
        const pokemonNumber = req.params.number;
        dataMapper.getOnePokemonById(pokemonNumber, (error, result) => {
            if(error){
                console.log('erreur dans pokemonCard :', error);
            } else {
                const allTabsForOnePokemon = result.rows;
                console.log('allTabsforOnePokemon:', allTabsForOnePokemon);
                const pokemonKeys = Object.keys(allTabsForOnePokemon[0]);
                const pokemonValues = Object.values(allTabsForOnePokemon[0]);
                res.render('pokemon', {
                    pokemon : allTabsForOnePokemon,
                    pokemonKey : pokemonKeys,
                    pokemonValue: pokemonValues,
                });
            }
        })
    },

    pokemonType: (req, res) => {
        dataMapper.getPokemonTypes((error, result) => {
            if(error){
                console.log('erreur dans pokemonType :', error)
            } else {
            const allPokemonTypesFromDatabase = result.rows;
            console.log(allPokemonTypesFromDatabase);
            res.render('types', {
                pokemonTypes : allPokemonTypesFromDatabase
            });
            }
        })
    },

    pokemonByType: (req, res) => {
        const pokemonType = req.params.type;
        dataMapper.getPokemonsByType(pokemonType,(error, result) => {
            if(error){
                console.log('erreur dans pokemonByType :', error)
            } else {
                const pokemonsByTypeFromDatabase = result.rows;
                res.render('home', {
                    pokemons : pokemonsByTypeFromDatabase,
                });
            }
        })
    },

}

module.exports = mainController;