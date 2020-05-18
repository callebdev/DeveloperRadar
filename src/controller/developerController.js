const axios = require('axios'); // Allow us to make reqs at APIs

// The developerController is an object
module.exports = {
    // TODO: All developer functions
    
    // Create 
    async createDeveloper(req, res) {

        // console.log(req.body.username);

        const { username } = req.body;

        const response = await axios.get(`https://api.github.com/users/${username}`)

        return res.json(response.data);
    }

    // Update

    
    
    // Delete

    
    
    // Like

    
    
    // Unlike

    
    
    // Favorite


    // Search



    // List
};