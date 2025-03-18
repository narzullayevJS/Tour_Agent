const Guide = require("../modules/TourGuide.model")
const TourGuide = require("../modules/Tour.model")
const CreateGuide = async (req, res) => {
    try {
        const { Name, Experience, Phone, tours} = req.body;
        
        const newTour = await Guide.create({
          Name, 
          Experience, 
          Phone, 
          tours:tours,
        });
        
        if (tours && tours.length > 0) {
          await TourGuide.updateMany(
            { _id: { $in: tours } },
            { $push: { tours: newTour._id } }
          );
        }
        
        res.status(201).json({
          status: 'success',
          data: {
            tour: newTour
          }
        });
      } catch (err) {
        console.error(err); 
        res.status(400).json({
          status: 'fail',
          message: err.message
        });
      }
    };

module.exports = {CreateGuide}