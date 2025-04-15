const db = require("../config/dbConfig");

class Personaje{
    getPersonajes(callback){

        const sql = "select * FROM personajesRuroin1";
        db.query(sql, callback);
    }
    getPersonajeByID(id, callback) {
        const sql = "SELECT id, nombreCompleto, edad, altura, peso FROM personajesRuroin1 WHERE id = $1";
        db.query(sql, [id], callback);
    }

}

module.exports = new Personaje()