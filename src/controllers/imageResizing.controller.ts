import { Request, Response } from 'express';
import { resolve, join } from 'path';
import sharp from 'sharp';

const RESOLVED_FULL_PATH = resolve(__dirname, '../../assets/images/full');
const RESOLVED_THUMB_PATH = resolve(__dirname, '../../assets/images/thumb');

const resizeImage = async (req: Request, res: Response) => {
  const { filename, width, height } = req.query;

  const fname: string = filename as string;
  //   const w: number | null = width ? parseInt(width as string, 10) : null;
  //   const h: number | null = height ? parseInt(width as string, 10) : null;
  const w: number = parseInt(width as string, 10);
  const h: number = parseInt(height as string, 10);

  const [name, format] = (filename as string).split('.');

  const inputPath: string = join(RESOLVED_FULL_PATH, fname);
  const thumbnailFilename = `thumb-${name}-${width}x${height}.${format}`;
  const outputPath = join(RESOLVED_THUMB_PATH, thumbnailFilename);
  console.log(inputPath);

  try {
    const resizeIm = sharp(inputPath).resize(w, h).toFormat('jpg');

    await resizeIm
      .toFile(outputPath)
      .then(() => {
        console.log('Image is Resized');
      })
      .catch((error) => {
        console.log('error');
      });
    return res.status(200).sendFile(outputPath);
  } catch (error) {
    console.log(error);
    return res.status(404).send("can't process image");
  }
};

export default resizeImage;
