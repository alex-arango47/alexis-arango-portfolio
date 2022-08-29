const mainControllers = {
    index: (req, res) => {
        res.render('index');
    },
    email: (req, res) => {
        res.redirect('/');
    },
    emailProcess: (req, res, next) => {
        console.log('Data:', req.body);
        res.json({message: 'Message received!'})
        next();
    }
}

module.exports = mainControllers;