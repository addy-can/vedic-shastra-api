import express from 'express';
import Joi from 'joi';
import { getAllScriptures, addScripture, getScriptureAnswer } from '../controllers/scriptureController';
import { validateRequest } from '../middleware/validateRequest';
import { scriptureValidationSchema } from '../validators/scriptureValidator';
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
router.get('/ping', (req, res) => {
  res.status(200).json({ message: 'Vedic Shastra API is alive!' });
});
router.get('/', getAllScriptures);
router.post('/', protect, addScripture); // Only authenticated users can add

router.post(
  '/lookup',
  validateRequest(scriptureValidationSchema as Joi.Schema),
  getScriptureAnswer
);

export default router;