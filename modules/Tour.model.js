const mongoose = require("mongoose")
let TourSChema = mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number},
        location: { type: String, required: true, default: "Amir temur st 123A" },
        guides: [{ type: mongoose.Schema.Types.ObjectId, ref: "TourGuide" }]
    })

let Tour = mongoose.model("Tour", TourSChema)
module.exports = Tour;