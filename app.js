const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mainRoutes = require('./routes/mainRoutes');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', mainRoutes);

app.use((req, res, next) => {
    res.status(404).render('404');
    next();
});

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })