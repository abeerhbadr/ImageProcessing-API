import { NextFunction, Request, Response } from 'express';

const paramsValidation = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.query);
  const { filename, width, height } = req.query;

  if (filename === undefined || typeof filename != 'string') {
    res.send('Filename is Not Correct');
    return;
  }

  // const isWNum = parseInt(width as string, 10);
  // const isHNum = parseInt(height as string, 10);
  // console.log(isHNum)

  if (!Number(width)) {
    res.send('Not Valid Width');
    return;
  }

  if (!Number(height)) {
    res.send('Not Valid Height');
    return;
  }

  return next();
};

export default paramsValidation;
