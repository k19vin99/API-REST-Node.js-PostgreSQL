

const personajeModel = require('../models/personajeModel');

module.exports = {
    
    getPersonajes: (req, res)=>{
        personajeModel.getPersonajes((err, result) =>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    getPersonajeByID: (req, res)=>{
        const {id} = req.params;

        personajeModel.getPersonajeByID((err, result) =>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            res.status(200).json({data: result});

            if(result.length === 0){
                res.status(404).json({message: "Personaje no encontrado"});
                return;
            }

            res.status(200).json({data: result});
        });
    }
}