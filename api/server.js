const express = require('express')
const recipesRouter = require('./recipes-router')

const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)

server.use('/', (err, req, res, next) => {
    res.status(500).json({
        message: `request ${req.method} could not be completed`,
        stack: err.stack
    })
})

module.exports = server