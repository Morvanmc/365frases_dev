const { Router } = require('express');

const PhraseController = require('./controllers/PhraseController');

const routes = Router();

routes.get('/phrase', PhraseController.index);
routes.post('/phrase', PhraseController.store);

module.exports = routes;