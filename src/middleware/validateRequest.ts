import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Schema } from 'joi';

export const validateRequest = (schema: Schema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }
    next();
  };
};