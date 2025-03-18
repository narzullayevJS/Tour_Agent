const Tour = require("../modules/Tour.model");
const TourGuide = require("../modules/TourGuide.model");

const CreateTour = async (req, res) => {
  try {
    const { name, description, price, location, guides } = req.body;

    const newTour = await Tour.create({
      name,
      description,
      price,
      location,
      guides: guides || [],
    });

    if (guides && guides.length > 0) {
      await TourGuide.updateMany(
        { _id: { $in: guides } },
        { $push: { tours: newTour._id } }
      );
    }

    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).populate({
      path: `guides`,
      select: `new experience  phone`,
    });
    if (!tour) {
      return res.status(404).json({
        status: "fail",
        message: "Bunday ID li sayohat topilmadi",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getAllTour = async (req, res) => {
    try {
      const tour = await Tour.find().populate({
        path: `guides`,
        select: `new experience  phone`,
      });
      
      res.status(200).json({
        status: "success",
        data: {
          tour,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: error.message,
      });
    }
  };

module.exports = { CreateTour, getTour ,getAllTour};
