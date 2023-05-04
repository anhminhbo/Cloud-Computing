const express = require('express');

const courseController = require('../controller/course_controller');

const router = express.Router();

router.get('/all', courseController.getAllCourse);
router.get('/:id', courseController.getCourseById);
router.post('/add', courseController.addCourse);
router.delete('/delete/:id', courseController.deleteCourse);
router.put('/update/:id', courseController.updateCourse);


module.exports = router;