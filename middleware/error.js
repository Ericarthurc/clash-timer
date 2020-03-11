const ErrorResponse = require('../utils/errorResponse');
const log = require('../utils/logs');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // Log to console for dev
  log.error(err.stack);

  // Mongoose bad ObjectID
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose Validation Error
  if (err.name == 'ValidationError') {
    const message = `Error!`;
    error = new ErrorResponse(message, 406);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
