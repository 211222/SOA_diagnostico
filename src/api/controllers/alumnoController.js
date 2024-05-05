const { json } = require('express');
const alumnoService = require ('../../services/alumnoServices.js');

exports.createAlumno = async(req, res) => {
    try{
        const { nombre, apellido, email, matricula } = req.body;
        const nuevoAlumno = await alumnoService.createAlumno(nombre, apellido, email, matricula);
        res.status(202).json(nuevoAlumno);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear nuevo alumno', error: error.message});
    }
};

exports.getAllAlumnos = async (req, res) => {
    try {
        const alumnos = await alumnoService.getAllAlumnos();
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los tutores', error: error.message });
    }
};

exports.asignarTutor = async (req, res) => {
    try {
        const { alumnoId, tutorId } = req.body;
        await alumnoService.asignarTutor(alumnoId, tutorId);
        res.status(200).json({ message: 'Tutor asignado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al asignar el tutor (ID del tutor no existe)', error: error.message });
    }
};


exports.asignarMateria = async (req, res) => {
    try {
        const { alumnoId, materiaId } = req.body;
        await alumnoService.asignarMateria(alumnoId, materiaId);
        res.status(200).json({ message: 'Materia asignada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al asignar la materia', error: error.message });
    }
};

exports.getMateriasByAlumnoId = async (req, res) => {
    try {
        const { alumnoId } = req.params;
        const materias = await alumnoService.getMateriasByAlumnoId(alumnoId);
        res.status(200).json(materias);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las materias del alumno', error: error.message });
    }
};
