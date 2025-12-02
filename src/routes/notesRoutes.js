import { Router } from 'express';
import { getNotes, getNoteById } from '../controllers/noteController.js';

const router = Router();

router.get('/notes', getNotes);

router.get('/notes/:noteId', getNoteById);

export default router;
