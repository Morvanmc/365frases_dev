const mongoose = require('mongoose');

const PhraseSchema = new mongoose.Schema({
    content: String,
    author: String,
    agreeTerms: Boolean,
});

module.exports = mongoose.model('Phrase', PhraseSchema);