const dotemv = require('dotenv')
dotemv.config({ path: "./config.env" })
const express = require('express');
const app = express();
const PORT = process.env.PORT;

const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");
const User = require('./models/userSchema');
const bodyParser = require('body-parser');

app.use(express.json());//for converting data from json to object
app.use(require('./router/auth')); //link router file here 
require('./db/conn');




// Fetching data of books from mongodDB
async function FindData() {
    const uri = "mongodb+srv://Tejas:Tejas123@airbnb.gh86ace.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect();
    let result = await client.db("E_commerceAPI").collection("booklists").find().toArray();
    return result;
}

app.get('/', (req, res) => {
    res.send("hello");
})



// sending books from from to /books route
app.get('/books', async (req, res) => {
    let bookData = await FindData();
    setTimeout(() => {
        res.json(bookData);
    }, 2000)

})


app.listen(PORT, () => {
    console.log(`server is started  on ${PORT}`)
})


