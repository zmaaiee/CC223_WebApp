const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.get('/api/message', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
