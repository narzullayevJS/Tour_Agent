const express = require('express');
const dotenv = require("dotenv").config()
const cors = require("cors")
const connectDB = require("./config/db")
const bookingRoute = require("./routes/booking.route")
const tourRoute = require("./routes/tour.route")
const tourGuide = require("./routes/tourGuide.route")

const app = express();

app.use(express.json())
app.use(cors())

connectDB()

app.use("/",bookingRoute)
app.use("/",tourRoute)
app.use("/",tourGuide)

app.listen(process.env.PORT,()=>{
    console.log('Server is running on port',`${process.env.PORT}`);
})