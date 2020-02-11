const { Router } = require('express');

const routes = Router();

app.post('/users', (request, response) => {
    console.log(request.query);
    return response.json({ message: 'Hello person'});
});

module.exports = routes;