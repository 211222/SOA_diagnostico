const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/materiaController');


router.post('/addM', materiaController.createMateria);




module.exports = router;
