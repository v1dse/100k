import { exportTransactions } from '../controllers/AdminController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import isAdminMiddleware from '../middleware/isAdmin.js';

router.get('/export-transactions', authMiddleware, isAdminMiddleware, exportTransactions);