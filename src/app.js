const express = require('express');
const app = express();

// Importar rutas
const tutorRoutes = require('./api/routes/tutorRoutes');
const alumnoRoutes = require('./api/routes/alumnoRoutes');
const materiaRoutes = require('./api/routes/materiaRoutes');


app.use(express.json());

// Rutas
app.use('/t', tutorRoutes);
app.use('/a', alumnoRoutes );
app.use('/m', materiaRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
