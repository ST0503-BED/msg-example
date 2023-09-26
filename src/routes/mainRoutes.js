const express = require('express');
const router = express.Router();

const messageRoutes = require('./messageRoutes');

router.use("/message", messageRoutes);

module.exports = router;