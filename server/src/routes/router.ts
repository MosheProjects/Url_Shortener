import express from 'express';
import { shortenTheUrl, redirecThetUrl, getAll } from '../controllers/urlController';

const router = express.Router();

router.get('/allUrls', getAll)
router.post('/shorten', shortenTheUrl);
router.get('/:shortId', redirecThetUrl);


export default router;