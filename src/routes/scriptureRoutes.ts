import express from 'express';
import { getAllScriptures, addScripture, getScriptureAnswer } from '../controllers/scriptureController';
import { validateScriptureRequest } from '../middleware/validateRequest';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * /api/scriptures:
 *   get:
 *     summary: Get all scriptures
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/', getAllScriptures);
router.post('/', protect, addScripture); // Only authenticated users can add

router.post('/scriptures', validateScriptureRequest, getScriptureAnswer);

export default router;