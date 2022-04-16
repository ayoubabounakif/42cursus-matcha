const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express()
const port = process.env.PORT || 3000
const db_uri = process.env.DB_URI

// middlewares

// routes
app.get('/', (req, res) => {
    res.send('Wazuuuh');
})


//database
mongoose.connect(db_uri).then(() => {
    console.log(`Database running on ${db_uri}`);
}).catch(err => console.log(err));

// listen
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
