const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 8081;

app.use(cors()); // Enable CORS

// Serve static files from the current directory
app.use(express.static(__dirname)); // Serve files from the root directory

app.listen(port, () => {
    console.log(`Server running at http://localhost:8081/`);
});
