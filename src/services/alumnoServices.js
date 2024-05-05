// services/tutorServices.js
const db = require('../config/database');

exports.createAlumno = async (nombre, apellido, email, matricula) => {
    try {
       
        const sql = 'INSERT INTO Alumnos (nombre, apellido, email, matricula) VALUES (?, ?, ?, ?)';
        
        const [result] = await db.query(sql, [nombre, apellido, email, matricula]);
        
        return { id: result.insertId };
    } catch (error) {
        throw new Error('Error al crear alumno en la base de datos: ' + error.message);
    }
};
exports.getAllAlumnos = async () => {
    try {
        const [rows] = await db.query("SELECT * FROM Alumnos");
        return rows;
    } catch (error) {
        console.error('Error al obtener alumnos:', error);
        throw error;
    }
};

exports.asignarTutor = async (alumnoId, tutorId) => {
    const result = await db.query(
        `UPDATE Alumnos SET tutor_id = ? WHERE alumno_id = ?`,
        [tutorId, alumnoId]
    );
    return result;
};


exports.asignarMateria = async (alumnoId, materiaId) => {
    const result = await db.query(
        `UPDATE Alumnos SET materia_id = ? WHERE alumno_id = ?`,
        [materiaId, alumnoId]
    );
    return result;
};

exports.getMateriasByAlumnoId = async (alumnoId) => {
    const query = `
        SELECT Materias.nombre AS nombre_materia
        FROM Materias
        INNER JOIN Alumnos ON Materias.id = Alumnos.materia_id
        WHERE Alumnos.alumno_id = ?
    `;
    const [materias] = await db.query(query, [alumnoId]);
    return materias;
};

