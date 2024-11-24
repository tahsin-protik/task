import express from 'express';
import { getEmployeeInfoById } from '../controllers/employeeController.js';

const router = express.Router();

router.get('/health', (req, res) => {
  res.send('TEST, OK');
});
router.get('/employee-info/:id', getEmployeeInfoById);

export default router; 