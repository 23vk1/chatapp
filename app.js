require('dotenv').config();
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

// Default error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


