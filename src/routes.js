const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//dentro da api rest(da arquitetura rest) temos 4 metodos principais
// GET-buscar alguma informação/POST-criar alguma coisa/PUT-editar alguma coisa/DELETE-deletar..

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);


module.exports = routes;
