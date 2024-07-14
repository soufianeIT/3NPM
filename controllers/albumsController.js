const Album = require('../models/album');
const Photo = require('../models/photo');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const upload = multer({ dest: 'public/uploads/' });

exports.getAlbums = async (req, res) => {
    try {
        const albums = await Album.find().populate('photos');
        res.render('albums', { albums });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.addAlbum = [
    upload.array('photos', 10),
    async (req, res) => {
        try {
            const { title, description, date } = req.body;
            const album = new Album({ title, description, date });

            const photoPromises = req.files.map(file => {
                const photo = new Photo({
                    title: file.originalname,
                    description: '',
                    date: new Date(),
                    photoPath: `/uploads/${file.filename}`
                });
                return photo.save().then(photo => {
                    album.photos.push(photo);
                });
            });

            await Promise.all(photoPromises);
            await album.save();
            res.redirect('/albums/home');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
];

exports.editAlbum = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        res.render('editAlbum', { album });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateAlbum = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        await Album.findByIdAndUpdate(req.params.id, { title, description, date });
        res.redirect('/albums/home');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteAlbum = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        if (album) {
            // Supprimer les fichiers physiques
            for (const photoId of album.photos) {
                const photo = await Photo.findById(photoId);
                if (photo) {
                    fs.unlink(path.join(__dirname, '..', 'public', photo.photoPath), (err) => {
                        if (err) console.error('Erreur lors de la suppression du fichier:', err);
                    });
                }
            }
            // Supprimer les photos de la base de données
            await Photo.deleteMany({ _id: { $in: album.photos } });
            // Supprimer l'album de la base de données
            await Album.findByIdAndDelete(album._id);
        }
        res.redirect('/albums/home');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getHome = async (req, res) => {
    try {
        const albums = await Album.find().populate('photos');
        res.render('home', { albums });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getAlbum = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id).populate('photos');
        res.render('albumDetails', { album });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.addPhotoToAlbum = [
    upload.single('photo'),
    async (req, res) => {
        try {
            const { title, description, date } = req.body;
            const photo = new Photo({
                title,
                description,
                date,
                photoPath: `/uploads/${req.file.filename}`
            });

            await photo.save();

            const album = await Album.findById(req.params.id);
            album.photos.push(photo);
            await album.save();

            res.redirect(`/albums/${req.params.id}`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
];

exports.deletePhotoFromAlbum = async (req, res) => {
    try {
        const albumId = req.params.id;
        const photoId = req.params.photoId;

        const album = await Album.findById(albumId);
        const photo = await Photo.findById(photoId);

        if (photo) {
            // Supprimer le fichier physique
            fs.unlink(path.join(__dirname, '..', 'public', photo.photoPath), (err) => {
                if (err) console.error('Erreur lors de la suppression du fichier:', err);
            });

            // Supprimer la photo de la base de données et de l'album
            await Photo.findByIdAndDelete(photoId);
            album.photos.pull(photoId);
            await album.save();
        }

        res.redirect(`/albums/${albumId}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
