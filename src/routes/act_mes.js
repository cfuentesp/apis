var conn = require('../database');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Lista de actividades del mes
app.post('/actividades/get', (req, res) => {
    const { funcion } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_ACT_MES('${funcion}',null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Datos de actividad
app.post('/actividades/search', (req, res) => {
    const { funcion,cod_actividad } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_ACT_MES('${funcion}',null,${cod_actividad},null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

 //Update datos de actividad
 app.post('/actividades/update', (req, res) => {
    const { funcion,usr_adicion,cod_actividad,cod_persona,nom_actividad,fec_actividad,tip_actividad,des_actividad } = req.body;
    console.log(req.body)
    const query =` CALL CRUD_ACT_MES('${funcion}','${usr_adicion}',${cod_actividad},${cod_persona},'${nom_actividad}','${fec_actividad}','${tip_actividad}','${des_actividad}')`;
          conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Eliminar actividad 
app.post('/actividades/delete', (req, res) => {
    const { funcion,cod_actividad} = req.body;
    console.log(req.body)
    const query =` CALL CRUD_ACT_MES('${funcion}',null,${cod_actividad},null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });






//Insert transaccional actividad
  app.post('/actividades/insert', (req, res) => {
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