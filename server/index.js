require('dotenv').config()
const express = require('express')
// const session = require(express-session)
const massive = require ('massive')
const ctrl = require('./controller')

const app = express()
app.use(express.json())

let {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})



app.listen(SERVER_PORT, () => {
    console.log('Port is live on port ', SERVER_PORT)
})

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)