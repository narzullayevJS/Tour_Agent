const mongoose = require("mongoose")
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.URL)
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("Db connection failed");
    }
}

module.exports = connectDB