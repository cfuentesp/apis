
const mysql = require('mysql');

//Conectar a la base de datos
  mysqlConnection= mysql.createConnection({
    host: 'localhost',
    port:'3306',
    user: 'root',
    password: 'root',
    database: 'acoes',
    multipleStatements: true

});

// tes conexión de base de datos 
 mysqlConnection.connect((err)=>{
if (!err){
    console.log('Conexion exitosa');
} else{
    console.log('Error al conectar el DB');
    console.log(err);
}
});
module.exports = mysqlConnection;
