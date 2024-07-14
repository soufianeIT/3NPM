const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Configuration de la connexion à MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/phototheque', {
 
});
mongoose.connection.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB:'));

// Configuration des middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuration du dossier public pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Configuration du moteur de vue
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Importation des routes
//const photoRoutes = require('./routes/photoRoute');
const albumRoutes = require('./routes/albumRoute');

// Utilisation des routes
//app.use('/photos', photoRoutes);
app.use('/albums', albumRoutes);

// Route par défaut
// app.get('/', (req, res) => {
//   res.send('Bienvenue sur la photothèque');
// });

// app.get('/', (req, res) => {
//   res.render('home', { title: 'Photothèque' });
// });

app.get('/', (req, res) => {
  res.redirect('/albums/home');
});
// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur: http://localhost:${PORT}`);
});
