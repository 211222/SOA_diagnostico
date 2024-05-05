const { json } = require('express');
const materiaService = require ('../../services/materiaServices.js');

exports.createMateria = async(req, res) => {
    try{
        const { nombre } = req.body;
        const nuevaMateria = await materiaService.createMateria(nombre);
        res.status(202).json(nuevaMateria);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear nueva materia', error: error.message});
    }
};

