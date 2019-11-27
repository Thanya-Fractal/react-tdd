const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
    restaurantName: {
        type: String,
        required: "Restaurant is Required"
    },
    location: {
        type: String
    }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
