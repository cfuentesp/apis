var conn = require('../database');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Lista de evaluacion 
app.post('/evaluacion/get', (req, res) => {
    const { funcion } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_EVL_PERSONAL('${funcion}',null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Datos de evaluacion
app.post('/evaluacion/search', (req, res) => {
    const { funcion,cod_evaluacion } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_EVL_PERSONAL('${funcion}',null,${cod_evaluacion},null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

 //Update datos de evaluacion
 app.post('/evaluacion/update', (req, res) => {
    const { funcion,usr_adicion,cod_evaluacion,cod_persona,descripcion,fec_evaluacion,puntaje,are_evaluacion } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_EVL_PERSONAL('${funcion}','${usr_adicion}',${cod_evaluacion},${cod_persona},'${descripcion}','${fec_evaluacion}',${puntaje},'${are_evaluacion}')`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Lista de evaluacion 
app.post('/evaluacion/delete', (req, res) => {
    const { funcion,cod_evaluacion} = req.body;
    console.log(req.body)
      const query =` CALL CRUD_EVL_PERSONAL('${funcion}',null,${cod_evaluacion},null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });



  //Insert datos de evaluacion
  app.post('/evaluacion/insert', (req, res) => {
    const { funcion,usr_adicion,tip_equipo,mrc_equipo,mdl_serie,ecf_tecnicas,clr_equipo,num_equipo,fec_ingreso } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_INVENTARIO('${funcion}','${usr_adicion}',null,'${tip_equipo}','${mrc_equipo}','${mdl_serie}','${ecf_tecnicas}','${clr_equipo}',${num_equipo},'${fec_ingreso}')`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

module.exports = app;