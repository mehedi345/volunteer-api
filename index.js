const express = require('express');
const ObjectId = require("mongodb").ObjectId;
const importData = require('./data.json');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const cors = require('cors');
let port = process.env.PORT || 5000;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mehedi45:mehEDIui5634@cluster0.ozwps.mongodb.net/volunteerNetwork?retryWrites=true&w=majority";
const app = express();
const password = "mehEDIui5634";

admin.initializeApp();
const serviceAccount = require('./volunteer-network-b3ba3-firebase-adminsdk-jmnna-8a80a87b00.json');

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
  const userCollection = client.db("volunteerNetwork").collection("item");

  

  app.get('/getVolunteer', (req, res) => {
    usersCollection.find({})
        .toArray((err, documents) => {
            res.send(documents)
        })
    })

    app.delete('/deleteItem/:id', (req, res) => {
        usersCollection.deleteOne({
                _id: ObjectId(req.params.id)
            })
            .then(result => {
                if(result.deletedCount > 0){
                    console.log(result)
                }
            })
    })
 
    app.post('/addInfo', (req, res) => {
        const newInfo = req.body;
         collection.insertOne(newInfo)
         .then(result => {
             res.send(result.insertedCount > 0)
         })
      })

  app.get('/user', (req, res) => {
    userCollection.find({ email: req.query.email})
    .toArray( (err, documents) => {
      res.send(documents);
    })
})

app.delete('/deleteData/:id', (req, res) => {
    console.log(req.params.id)
     userCollection.deleteOne({
            _id: ObjectId(req.params.id)
        })
        .then(result => {
                console.log(result)
        })
})
  
});

app.listen(port, () => {
    console.log(`Example listening on port ${port}`);
})