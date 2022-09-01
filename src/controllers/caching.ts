import { promises as fs } from 'fs';
import access from 'fs/promises';

const isThumbFound = async (filepath: string) => {
  try {
    await fs.access(filepath);
    return true;
  } catch (error) {
    //console.log(error);
    return false;
  }
};

export default isThumbFound;
