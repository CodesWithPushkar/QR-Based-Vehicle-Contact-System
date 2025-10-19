// backend/server.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); // We import the database connection

const app = express();

// Connect to the Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// This tells Express to serve all the static files in the 'public' folder
app.use(express.static('public'));

// Define the main API route
app.use('/api/vehicles', require('./routes/vehicles')); // We tell the server to use our routes file

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));