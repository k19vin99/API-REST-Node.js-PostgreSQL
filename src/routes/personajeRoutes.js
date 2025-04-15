const express = require('express');
const router = express.Router();
const personajeController = require('../controllers/personajeController');

router.get('/', personajeController.getPersonajes);
router.get('/:id', personajeController.getPersonajeByID);


module.exports = router;