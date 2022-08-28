import sharp from 'sharp';

const sharpResize = async (
  inputPath: string,
  width: number,
  height: number,
  outputPath: string
) => {
  try {
    const resizeIm = sharp(inputPath).resize(width, height).toFormat('jpg');

    await resizeIm
      .toFile(outputPath)
      .then(() => {
        console.log('Image is Resized');
      })
      .catch((error) => {
        console.log('error');
        return "can't process image";
      });
    //return res.status(200).sendFile(outputPath);
    return outputPath;
  } catch (error) {
    console.log(error);
    return "can't process image";
    //return res.status(404).send("can't process image");
  }
};

export default sharpResize;
