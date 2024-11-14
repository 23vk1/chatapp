require('dotenv').config();
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes.js');

const app = express();

app.use(bodyParser.json());

// User routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// console.log(process.env.DB_HOST);

 ////
