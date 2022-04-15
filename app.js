const express = require('express');

const mainRoutes = require('./routes/main.routes');

const app = express();

app.use(express.static('public'));

app.use(mainRoutes);

app.listen(3000, () => console.log('Server is running on port 3000...'));