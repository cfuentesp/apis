var conn = require('../database');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Lista de mantenimiento 
app.post('/mantenimiento/get', (req, res) => {
    const { funcion } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_DIS_MANTENIMIENTO('${funcion}',null,null,null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Datos de mantenimiento
app.post('/mantenimiento/search', (req, res) => {
    const { funcion,cod_reparacion } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_DIS_MANTENIMIENTO('${funcion}',null,${cod_reparacion},null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

 //Update datos de mantenimiento
 app.post('/mantenimiento/update', (req, res) => {
    const { funcion,usr_adicion,cod_reparacion,des_falla,sol_problema,fec_ingreso } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_DIS_MANTENIMIENTO('${funcion}','${usr_adicion}',${cod_reparacion},null,null,'${des_falla}','${sol_problema}',null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Lista de mantenimiento 
app.post('/mantenimiento/delete', (req, res) => {
    const { funcion,cod_reparacion} = req.body;
    console.log(req.body)
      const query =` CALL CRUD_DIS_MANTENIMIENTO('${funcion}',null,${cod_reparacion},null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

    //Lista de mantenimiento 
app.post('/mantenimiento/revisado', (req, res) => {
  const { funcion,cod_reparacion} = req.body;
  console.log(req.body)
    const query =` CALL CRUD_DIS_MANTENIMIENTO('${funcion}',null,${cod_reparacion},null,null,null,null,null,null,null)`;
    conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

    


module.exports = app;