const axios = require('axios'); // Allow us to make reqs at APIs
const developer = require('../model/developer')

// The developerController is an object
module.exports = {
    // TODO: All developer functions
    
    // Create 
    async createDeveloper(req, res) {

        // console.log(req.body.username);

        const { username } = req.body;

        const response = await axios.get(`https://api.github.com/users/${username}`)

        // console.log(response.data)

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await developer.create({
            name,
            user : username,
            bio,
            avatar
        })

        // console.log(dev.data) // Took much time

        // Taking much time
        return res.json(dev);
    }

    // Update

    
    
    // Delete

    
    
    // Like

    
    
    // Unlike

    
    
    // Favorite


    // Search



    // List
};