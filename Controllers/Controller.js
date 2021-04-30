

exports.parkCar = async (req, res) => {
  const Success = "Parking Success"
  res.status(200).json({
    status: 200,
    Success,
  });
};

exports.unParkCar = async (req, res) => {
  const Success = "UnParking Success"
  res.status(200).json({
    status: 200,
    Success,
  });
};

exports.getCars = async (req, res) => {
  const Success = "Cars Success"

  res.status(200).json({
    status: 200,
    Success,
  });
};
