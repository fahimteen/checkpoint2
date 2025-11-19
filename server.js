// server.js
// ---------------------------------------------
// Basic Express server setup
// ---------------------------------------------

const express = require('express');          // Import express
const app = express();                       // Create app instance

app.use(express.json());                     // Parse JSON bodies

// Root endpoint for quick testing
app.get('/', (req, res) => {
  res.send('API Server Running');
});

// Server listener
const PORT = process.env.PORT || 3000;       // Allow port override
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
