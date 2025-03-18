const express = require("express")
const { getAllBookings, getAllBookingId, CreateBooking } = require("../controller/booking.controller")

const router = express.Router()

router
.get("/bookings", getAllBookings)
.get("/bookings/:id", getAllBookingId)
.post("/bookings", CreateBooking)


module.exports = router
