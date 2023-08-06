import { Router } from 'express';
import { registerUser, loginUser, getAllUsers, updateUser, deleteUser, logoutUser } from '../controllers/user.controllers';

const router = Router();

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/users/:id').put(updateUser).delete(deleteUser)
router.route('/users').get(getAllUsers)
router.route('/logout/:id').get(logoutUser)

export default router;
