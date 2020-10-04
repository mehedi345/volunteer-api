const express = require('express');
const app = express();
const importData = require('./data.json')
let port = process.env.PORT || 5000;



app.get('/', (req, res) => {
    res.send('api created by author')
})

app.get('/categories', (req, res) => {
        res.send(importData)
})

app.listen(port)