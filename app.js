const express = require('express');
const path = require('path');

const app = express();

// serve static files that can help to serev the server
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
