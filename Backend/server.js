const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // ✅ Allows requests from different origins
app.use(express.json());

// Serve static files (optional, if needed)
app.use(express.static('public'));

// ✅ Simple API response
app.get('/api/message', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // ✅ Manually set CORS header
    res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
