// const {Schema, model} = require('mongoose')

//  developerSchema -> 
const developerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        bio: String,
        avatar: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true // Each dev has a timestamp :)
    }
);

// module.exports = model('developer', developerSchema)