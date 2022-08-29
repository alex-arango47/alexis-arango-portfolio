const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mainRoutes = require('./routes/mainRoutes');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', mainRoutes);

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })