const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');


router.post('/addA', alumnoController.createAlumno);
router.get('/alumnos', alumnoController.getAllAlumnos);
router.post('/asignar-tutor', alumnoController.asignarTutor);
router.post('/asignar-materia', alumnoController.asignarMateria);
router.get('/:alumnoId/materias', alumnoController.getMateriasByAlumnoId);



module.exports = router;
