const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

    const { name, avatar_url, bio } = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim()); //Trim = remove espaçamentos antes e depois de Strings

    await Dev.create ({
        github_username: github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    });

    return response.json({ message: 'Hello person'});
});

module.exports = routes; //Exportando o objeto routes