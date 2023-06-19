const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    org:{
        type: String,
        required: true
    },
    known:{
        type: String,
        required: true
    }
},{timestamps: true})

const BookModel = mongoose.model("bookings", bookSchema);

module.exports = {BookModel};