// services/tutorServices.js
const db = require('../config/database');

exports.createMateria = async (nombre) => {
    try {
        // Sentencia SQL para insertar un nuevo tutor en la tabla Tutor
        const sql = 'INSERT INTO Materias (nombre) VALUES (?)';
        
        // Ejecutar la consulta SQL
        const [result] = await db.query(sql, [nombre]);
        
        // Retornar el ID del tutor creado
        return { id: result.insertId };
    } catch (error) {
        throw new Error('Error al crear el tutor en la base de datos: ' + error.message);
    }
};

