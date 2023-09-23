const errorHandler = (error, req, res, next) => {
  console.log(error);

  if (error instanceof RecruitAssessError) {
    return res.status(error.status).json({ message: error.message });
  }
  
  res.status(500).json({ message: error.message });
};

module.exports = {
  errorHandler,
};