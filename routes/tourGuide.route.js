const express = require("express")

const {CreateGuide} = require("../controller/TourGuide.controller")
const router = express.Router()
.post("/guids", CreateGuide)

module.exports = router