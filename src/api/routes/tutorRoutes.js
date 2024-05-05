const express = require('express');
const router = express.Router();
const tutorController = require('../controllers/tutorController.js');


router.post('/add', tutorController.createTutor);
router.get('/tutores', tutorController.getAllTutor);
router.get('/:tutorId/alumnos', tutorController.getAlumnosByTutorId);


module.exports = router;
