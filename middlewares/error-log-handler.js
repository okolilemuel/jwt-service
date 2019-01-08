export default (error, request, response, next) => {
  console.error(error.stack);
  next(error);
};