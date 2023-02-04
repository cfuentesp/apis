var conn = require('../database');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Lista de equipos 
app.post('/inventario/get', (req, res) => {
    const { funcion } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_INVENTARIO('${funcion}',null,null,null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Datos de equipo
app.post('/inventario/search', (req, res) => {
    const { funcion,cod_equipo } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_INVENTARIO('${funcion}',null,${cod_equipo},null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Insert datos de equipo
 app.post('/inventario/insert', (req, res) => {
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

 //Update datos de equipo
 app.post('/inventario/update', (req, res) => {
    const { funcion,usr_adicion,cod_equipo,tip_equipo,mrc_equipo,mdl_serie,ecf_tecnicas,clr_equipo,num_equipo,fec_ingreso } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_INVENTARIO('${funcion}','${usr_adicion}',${cod_equipo},'${tip_equipo}','${mrc_equipo}','${mdl_serie}','${ecf_tecnicas}','${clr_equipo}',${num_equipo},'${fec_ingreso}')`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Lista de equipos 
app.post('/inventario/delete', (req, res) => {
    const { funcion,cod_equipo} = req.body;
    console.log(req.body)
      const query =` CALL CRUD_INVENTARIO('${funcion}',null,${cod_equipo},null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

module.exports = app;