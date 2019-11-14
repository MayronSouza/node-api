const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

// Iniciando a App
const app = express()
app.use(express.json())
app.use(cors())

// Iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})

requireDir('./src/models')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(3000, () => {
    console.log('Servidor executando...')
})