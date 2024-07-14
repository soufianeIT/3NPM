const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }]
});

module.exports = mongoose.model('Album', albumSchema);
