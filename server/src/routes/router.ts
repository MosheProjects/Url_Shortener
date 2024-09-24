import express from 'express';
import { shortenUrl2, redirectUrl1, redirectUrl2 } from '../controllers/urlController';
import Url from '../models/url';
import { validateUrl } from '../utils/utils';
import * as dotenv from 'dotenv';


dotenv.config({ path: '../config/.env' });
const router = express.Router();

router.post('/shorten', shortenUrl2);
router.get('/:shortId', redirectUrl2);

export default router;