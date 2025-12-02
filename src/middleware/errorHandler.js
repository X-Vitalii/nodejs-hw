export const errorHandler = (err, req, res, next) => {
  console.error(err);

  const isProd = process.env.NODE_ENV === 'production';

  res.status(err.status || err.statusCode || 500).json({
    message: isProd
      ? 'Something went wrong. Please try again later.'
      : err.message,
  });

  const status = err.status || err.statusCode || 500;

  const message =
    err.message || 'Something went wrong. Please try again later.';

  res.status(status).json({ message });
};

export default errorHandler;
