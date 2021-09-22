const Phrase = require('../models/Phrase');

module.exports = {

    //Listar Frases

    async index(req, res) {
        const phrase = await Phrase.find();

        return res.json(phrase);
    },

    //Cadastrar Frases

    async store(req, res) {
        const { content, author, agreeTerms } = req.body;

        let phrase = await Phrase.insertMany({
            content,
            author,
            agreeTerms,
        });

        return res.json(phrase);
    },
};