const express = require('express');
const mongoose = require ('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos  de parâmetros:

//Query Params : request.query (Filtros, ordenação, paginação, ... )
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.listen(3333);
