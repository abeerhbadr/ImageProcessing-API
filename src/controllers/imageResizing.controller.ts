import { NextFunction, Request, Response } from 'express';
import sharp from 'sharp';

const resizeImage = async (req: Request, res: Response, next: NextFunction) => {
  const { filename, width, height } = req.query;

  const fname: string = filename as string;
  const w: number | null = width ? parseInt(width as string, 10) : null;
  const h: number | null = height ? parseInt(width as string, 10) : null;
  const outputFile: string = '';

  try {
    const resize = sharp(fname).resize({ w, h }).toFormat('jpg');

    await resize.toFile(outputFile).then(()=>{
        console.log('Image is Resized');
    });
  } catch (error) {
    console.log(error);
  }
};

export default resizeImage;
