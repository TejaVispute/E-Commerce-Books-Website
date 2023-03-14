const mongoose = require('mongoose')

// for connecting to databse
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewurlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`connection success`)
}).catch(err => console.log(err));