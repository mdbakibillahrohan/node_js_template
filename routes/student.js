const express = require('express');
const authMiddleware = require('../middlewares/auth_middleware');
const studentRouter = express.Router();
const getStudentController = require('../controllers/student/getStudent');
const { API } = require('../util/constant');


studentRouter.get('students', (req, res) => {
    res.send("working")
})
module.exports = studentRouter;