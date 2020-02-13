const mongoose = require ('mongoose');

const PointSchema = new mongoose.Schema ({
    type: {
        type: String,
        enum: ['Point'],
        require: true,
    },
    coordinates: {
        type: [Number],
        retuire: true,
    },
});

module.exports = PointSchema;