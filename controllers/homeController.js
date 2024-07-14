const Album = require('../models/album');

exports.getHome = (req, res, next) => {
  Album.find()
    .then(albums => {
      res.render('home', { albums });
    })
    .catch(err => {
      console.error('Error fetching albums:', err);
      next(err); 
      
    });
};
