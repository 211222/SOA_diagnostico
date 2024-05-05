// controllers/tutorController.js
const tutorService = require('../../services/tutorServices');

exports.createTutor = async (req, res) => {
    try {
        const { nombre, apellido } = req.body;
        const nuevoTutor = await tutorService.createTutor(nombre, apellido);
        res.status(201).json(nuevoTutor);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el tutor', error: error.message });
    }
};

exports.getAllTutor = async (req, res) => {
    try {
        const tutores = await tutorService.getAllTutor();
        res.json(tutores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los tutores', error: error.message });
    }
};


exports.getAlumnosByTutorId = async (req, res) => {
    try {
        const { tutorId } = req.params; 
        const alumnos = await tutorService.getAlumnosByTutorId(tutorId);
        res.status(200).json(alumnos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los alumnos del tutor', error: error.message });
    }
};