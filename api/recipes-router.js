const router = require('express').Router()
const Recipe = require('./recipes-model')

router.get('/:id', (req, res, next) => {
    Recipe.findById(req.params.id)
        .then(rec => {
            res.status(200).json(rec)
        })
        .catch(err => next(err))
})

module.exports = router