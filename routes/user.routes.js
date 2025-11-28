/* eslint-disable */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authBearer = require('../middlewares/auth.middleware');


// Semua route user wajib pakai Bearer Token
router.get('/', authBearer, userController.getAllUsers); 
router.get('/:id', authBearer, userController.getUserById);
router.post('/', authBearer, userController.createUser);
router.put('/:id', authBearer, userController.updateUser);
router.delete('/:id', authBearer, userController.deleteUser);

module.exports = router;
