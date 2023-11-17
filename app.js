const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
// routes
const books = require('./config/routes/api/books');


connectDB();
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));



// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8000;

app.listen(port,()=>console.log(`Server running on port ${port}`));