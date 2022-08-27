import express from 'express';
import imageResizing from '../controllers/imageResizing.controller';
import paramsValidation from '../middlewares/paramsValidation.middleware';

const router = express.Router();

router.get('/images',imageResizing,paramsValidation);

export default router;
