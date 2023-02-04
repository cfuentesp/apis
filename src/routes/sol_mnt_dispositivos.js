var conn = require('../database');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Lista de solicitud 
app.post('/solicitud/get', (req, res) => {
    const { funcion } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_MNT_DISPOSITIVOS('${funcion}',null,null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Datos de solicitud
app.post('/solicitud/search', (req, res) => {
    const { funcion,cod_sol_mantenimiento } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_MNT_DISPOSITIVOS('${funcion}',null,${cod_sol_mantenimiento},null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Lista de solicitud 
app.post('/solicitud/delete', (req, res) => {
    const { funcion,cod_sol_mantenimiento} = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_MNT_DISPOSITIVOS('${funcion}',null,${cod_sol_mantenimiento},null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Insert datos de solicitud
  app.post('/solicitud/insert', (req, res) => {
    const { cod_equipo,motivo,tipo,area} = req.body;
    console.log(req.body)
      const query =` CALL TRANS_SOL_MNT_DISPOSITIVOS(${cod_equipo},'${motivo}','${tipo}','${area}')`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

    //Insert datos de solicitud
    app.post('/solicitud/result', (req, res) => {
      const { cod_equipo,funcion} = req.body;
      console.log(req.body)
      const query =` CALL CRUD_SOL_MNT_DISPOSITIVOS('${funcion}',null,null,null,${cod_equipo},null,null,null,null)`;
        conn.query(query, (err,rows,) => {
            if(!err) {
                res.json(rows)
                }else{
                console.log(err);
                }
         });
    });

module.exports = app;