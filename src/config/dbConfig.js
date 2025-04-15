const {Pool} = require('pg');

const db = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Isidora2020',
    database: 'test',
    port: 5432
});

db.connect((err)=>{
    if (err){
        throw err;
    }
    console.log("Conexión exitosa a Postgresql");
});


module.exports = db;