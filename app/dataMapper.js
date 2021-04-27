const database = require('./database');

const dataMapper = {

    getAllPokemons: (callback) => {
        const getAllPokemonsQuery = 'SELECT * FROM "pokemon";';
        database.query(getAllPokemonsQuery, callback);
    },

    getOnePokemonById: (id, callback) => {
        const getOnePockemonByIdQuery = 'SELECT * FROM "pokemon" JOIN "pokemon_type" ON pokemon.numero = pokemon_type.pokemon_numero JOIN "type" ON pokemon_type.type_id = type.id WHERE "pokemon_numero"=$1;';
        database.query(getOnePockemonByIdQuery, [id], callback);
    },

    getPokemonTypes: (callback) => {
        const allTypesQuery = 'SELECT * FROM "type";';
        database.query(allTypesQuery, callback);
    },

    getPokemonsByType : (type, callback) => {
        const getPokemonsByTypesQuery = ' SELECT * FROM "pokemon" JOIN "pokemon_type" ON pokemon.numero = pokemon_type.pokemon_numero JOIN "type" ON pokemon_type.type_id = type.id WHERE type.name =$1;';
        database.query(getPokemonsByTypesQuery, [type], callback);
    }
    
}

module.exports = dataMapper;