const { render } = require('express/lib/response');
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

exports.getShowById = (req, res, next) => {
    try {
        const show = shows.find(s => s.id === req.params.id);

        if (!show){
            return res.status(404).render('404', { title: 'show not found'});
        }

        res.render('show', { title: show.title, show});
    } catch (err) {
        next(err);
    }
};