// services/tutorServices.js
const db = require('../config/database');

exports.createTutor = async (nombre, apellido) => {
    try {
        // Sentencia SQL para insertar un nuevo tutor en la tabla Tutor
        const sql = 'INSERT INTO Tutores (nombre, apellido) VALUES (?, ?)';
        
        // Ejecutar la consulta SQL
        const [result] = await db.query(sql, [nombre, apellido]);
        
        // Retornar el ID del tutor creado
        return { id: result.insertId };
    } catch (error) {
        throw new Error('Error al crear el tutor en la base de datos: ' + error.message);
    }
};

exports.getAllTutor = async () => {
    try {
        const [rows] = await db.query("SELECT * FROM Tutores");
        return rows;
    } catch (error) {
        console.error('Error al obtener tutores:', error);
        throw error;
    }
};


exports.getAlumnosByTutorId = async (tutorId) => {
    const query = `
        SELECT * FROM Alumnos
        WHERE tutor_id = ?
    `;
    const [alumnos] = await db.query(query, [tutorId]);
    return alumnos;
};

