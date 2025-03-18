const Booking = require("../modules/Booking.model")
const Tour = require("../modules/Tour.model")
const getAllBookings = async(req,res)=>{

    try {
        const bookings = await Booking.find().populate("Tour_id")
        res.status(200).json(bookings);
    } catch (error) {
 res.status(404).json({ message: "Server error", error })       
    }
}

const getAllBookingId = async (req,res)=>{
    try {
        const booking = await Booking.findById(req.params.id)

        res.json(booking)
    } catch (error) {
        res.status(500).json({ message: "Server error", error })
    }
}

const CreateBooking = async (req, res) => {
    try {
        // Parametrlarni to'g'ri nomda olish
        const { user_name, tour, date } = req.body;
        
        // Avval tourni tekshirish
        const tourExists = await Tour.findById(tour);
        if (!tourExists) {
          return res.status(404).json({
            status: 'fail',
            message: 'Korsatilgan tour ID mavjud emas'
          });
        }
        
        const newBooking = await Booking.create({
          user_name,
          tour_id:tour,
          date
        });
        
        res.status(201).json({
          status: 'success',
          data: {
            booking: newBooking
          }
        });
      } catch (err) {
        console.error("Booking yaratishda xato:", err); // Batafsilroq log
        res.status(400).json({
          status: 'fail',
          message: err.message
        });
      }
    };


module.exports = {getAllBookings,getAllBookingId,CreateBooking}
