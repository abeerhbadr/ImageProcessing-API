import express from 'express';
import paramsValidation from '../middlewares/paramsValidation.middleware';
import imageResizing from '../controllers/imageResizing.controller';

const router = express.Router();

router.get('/images', paramsValidation, imageResizing);

export default router;
