const mongoose = require('mongoose');

const PhraseSchema = new mongoose.Schema({
    content: String,
    author: String,
});

module.exports = mongoose.model('Phrase', PhraseSchema);