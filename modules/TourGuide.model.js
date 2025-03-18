const mongoose = require("mongoose")
let TourGudeSchema = mongoose.Schema(
    {
        Name: { type: String, required: true },
        Experience: { type: Number, required: true },
        Phone: { type: String, required: [true, "Telefon raqami kiritilishi shart"]},
        tours: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tour" }]
      })

let TourGuide = mongoose.model("TourGuide",TourGudeSchema)
module.exports = TourGuide