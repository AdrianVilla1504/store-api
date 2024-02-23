const express = require('express');
const userService = require('../../services/user.service');
const service = new userService();
const router = express.Router();
const { createUserSchema, updateUserSchema, getUserSchema } = require('../../schemas/user.schema.js');
router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json({ success: true, users: users});
  } catch (error) {
    next(error)
  }

})

module.exports = router;
