const mongoose = require("mongoose")
const Tour = require("./Tour.model")

const BookingSchema = mongoose.Schema({
    user_name:{type: String, required: true},
    tour_id: {type: mongoose.Schema.Types.ObjectId, ref:"Tour", required: true},
    date: { type: Date, default: Date.now },
})

let Booking = mongoose.model("booking",BookingSchema)
module.exports = Booking
