const express = require('express');
const ObjectId = require("mongodb").ObjectId;
const importData = require('./data.json');
const bodyParser = require('body-parser');
const cors = require('cors');
let port = process.env.PORT || 5000;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mehedi45:mehEDIui5634@cluster0.ozwps.mongodb.net/volunteerNetwork?retryWrites=true&w=majority";
const app = express();
const password = "mehEDIui5634"
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('api created by author')
})

app.get('/categories', (req, res) => {
        res.send(importData)
})



const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});

client.connect(err => {
  const collection = client.db("volunteerNetwork").collection("volunteers");

  app.post('/addInfo', (req, res) => {
    const newInfo = req.body;
     collection.insertOne(newInfo)
     .then(result => {
         res.send(result.insertedCount > 0)
     })
  })

   app.
  
});

app.listen(port, () => {
    console.log(`Example listening on port ${port}`);
})