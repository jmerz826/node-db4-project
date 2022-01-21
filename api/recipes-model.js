const db = require('../data/db-config')

async function findById(id) {
    return db('recipes').where('recipe_id', id)
}

module.exports = {findById}