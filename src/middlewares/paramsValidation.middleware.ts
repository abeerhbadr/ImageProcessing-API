import { NextFunction, Request, Response } from 'express';

const paramsValidation = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.query);
  const { filename, width, height } = req.query;

  if (filename === undefined || typeof filename != 'string') {
    res.send('Filename is Not Correct');
    return;
  }

  if (typeof width != 'number' || typeof height != 'number') {
    res.send('Not Valid Width Or Height');
  }

  next();
};

export default paramsValidation;
