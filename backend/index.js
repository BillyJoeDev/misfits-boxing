// Initialize HTTP Server
const express = require('express');
const app = express();

// Allow enviorment variables
require('dotenv/config');

// Parses JSON Data in HTTP Request
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Allows resource share accross origin
const cors = require('cors');
app.use(cors());

// Setup API Routes
const setupRouter = require('./setup/setupRouter');
setupRouter(app);

// Connect to DB and Start Server
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION, ()=> console.log('Connected to DB!'));
app.listen(5000, () => { console.log("Backend has been started on port 5000.");})