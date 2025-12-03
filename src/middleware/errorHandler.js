import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  const statusCode = err.statusCode ?? 500;

  res.status(statusCode).json({
    message: err.message,
  });
};
