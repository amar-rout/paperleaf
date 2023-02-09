export const notFound = (req, res, next) => {
  const error = new Error(`Bad URL`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const error = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(error);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'prod' ? null : err.stack,
  });
};
