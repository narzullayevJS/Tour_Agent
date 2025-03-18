const express = require("express")
const {CreateTour, getTour, getAllTour} = require("../controller/Tour.controller")
const router = express.Router()
router
.post("/tours", CreateTour)
.get("/tours",getAllTour)
.get("/tours/:id",getTour)


module.exports = router