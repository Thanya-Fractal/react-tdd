const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dishSchema = new Schema({
    dishName: {
        type: String,
        required: "Dish Name is Required"
    },
    comment: {
        type: String
    },
    score:{
        type: Number
    }
});

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;