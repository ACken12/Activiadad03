const express = require('express');
const router = express.Router();
const usersRouter = require('./users.route');

router.post('/User/Login', usersRouter.get); //Controllers.authMiddleware
router.get("/User/register", usersRouter.post);



module.exports = router;
