const express = require('express');
const connectDB = require('./database/database');
const dotenv = require("dotenv").config();
const authRoutes = require('./routes/user-routes')

const app = express()

app.use(express.json())

app.use('/', authRoutes)

const PORT = process.env.PORT || 4000

app.get('/', function (req,res) {
    res.send('Hello World');
})


connectDB()
app.listen(PORT, function() {
    console.log(`Server is running on PORT ${PORT}`);
})