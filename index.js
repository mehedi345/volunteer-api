const express = require('express');

const importData = require('./data.json');
const cors = require('cors');
let port = process.env.PORT || 5000;

const app = express();

app.use(cors());


app.get('/', (req, res) => {
    res.send('api created by author')
})

app.get('/categories', (req, res) => {
        res.send(importData)
})

app.listen(port, () => {
    console.log(`Example listening on port ${port}`);
})