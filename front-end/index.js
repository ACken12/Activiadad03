const express = require('express');
const path = require('path');

const app = express();
const PORT = 5500;

app.use(express.static(path.join(__dirname, 'html')));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'signup.html'));
});



app.listen(PORT, () => {
  console.log(`Frontend corriendo en http://localhost:${PORT}/`);
});
