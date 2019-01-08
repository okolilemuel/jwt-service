export default (error, request, response, next) => {
  // Handle Joi validation error here
  if (error.isJoi) {
    return response.status(406).send({
      status: error.name,
      message: (error.details).map(detail => detail.message).reduce((messages, message) => {
        messages.push(message);
      })
    });
  }

  response.status(error.statusCode || 500).send(error);
};