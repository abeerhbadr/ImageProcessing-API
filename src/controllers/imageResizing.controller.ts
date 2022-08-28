import { Request, Response } from 'express';
import { resolve, join } from 'path';
import sharpResize from './sharpResize';

const RESOLVED_FULL_PATH = resolve(__dirname, '../../assets/images/full');
const RESOLVED_THUMB_PATH = resolve(__dirname, '../../assets/images/thumb');

const resizeImage = async (req: Request, res: Response) => {
  const { filename, width, height } = req.query;

  try {
    const fname: string = filename as string;
    //   const w: number | null = width ? parseInt(width as string, 10) : null;
    //   const h: number | null = height ? parseInt(width as string, 10) : null;
    const w: number = parseInt(width as string, 10);
    const h: number = parseInt(height as string, 10);

    if ((filename as string).includes('.')) {
      var inputPath: string = join(RESOLVED_FULL_PATH, fname);
      var [name, format] = (filename as string).split('.');
    } else {
      var inputPath: string = join(RESOLVED_FULL_PATH, fname+'.jpg');
      var [name, format] = [filename as string, 'jpg'];
    }
    
    console.log(inputPath);

    const thumbnailFilename = `thumb-${name}-${width}x${height}.${format}`;
    const outputPath = join(RESOLVED_THUMB_PATH, thumbnailFilename);

    const ret = await sharpResize(inputPath, w, h, outputPath);
    if (ret != "can't process image") {
      return res.status(200).sendFile(ret);
    }
    else {
      return res.status(400).send("can't process image");
    }
   
  } catch (error) {
    console.log(error);
    return res.status(400).send("can't process image");
  }
};

export default resizeImage;
