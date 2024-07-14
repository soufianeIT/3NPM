const express = require('express');
const router = express.Router();
const albumsController = require('../controllers/albumsController');

router.get('/home', albumsController.getHome);
router.get('/add', (req, res) => res.render('addAlbum'));
router.post('/add', albumsController.addAlbum);
router.get('/edit/:id', albumsController.editAlbum);
router.post('/edit/:id', albumsController.updateAlbum);
router.post('/delete/:id', albumsController.deleteAlbum);

router.get('/:id', albumsController.getAlbum);
router.post('/:id/add-photo', albumsController.addPhotoToAlbum);
router.post('/:id/delete-photo/:photoId', albumsController.deletePhotoFromAlbum);

module.exports = router;
