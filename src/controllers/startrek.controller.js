const shows = require('../data/shows');

exports.getHomePage = (req, res, next) => {
    try {
        res.render('index', { title: 'Welcome to Star Trek' });
    } catch (err) {
        next(err)
    }
};

exports.getShows = (req, res, next) => {
    try {
        res.render('shows', { title: 'Star Trek Shows', shows});
    } catch (err) {
        next(err);
    }
};