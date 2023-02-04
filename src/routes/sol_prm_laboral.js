var conn = require('../database');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Lista de permiso 
app.post('/permiso/get', (req, res) => {
    const { funcion } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_PRM_LABORAL('${funcion}',null,null,null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Datos de permiso
app.post('/permiso/search', (req, res) => {
    const { funcion,cod_sol_permiso } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_PRM_LABORAL('${funcion}',null,${cod_sol_permiso},null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

 //Update datos de permiso
 app.post('/permiso/update', (req, res) => {
    const { funcion,usr_adicion,cod_sol_permiso,tip_solicitud,des_solicitud,fec_inicio,fec_final } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_PRM_LABORAL('${funcion}','${usr_adicion}',${cod_sol_permiso},null,'${tip_solicitud}','${des_solicitud}','${fec_inicio}','${fec_final}',null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Lista de permiso 
app.post('/permiso/delete', (req, res) => {
    const { funcion,cod_sol_permiso} = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_PRM_LABORAL('${funcion}',null,${cod_sol_permiso},null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });



 //Insert datos de permiso
 app.post('/permiso/insert', (req, res) => {
  const { funcion,usr_adicion,cod_persona,tip_solicitud,des_solicitud,fec_inicio,fec_final } = req.body;
  console.log(req.body)
  const query =` CALL CRUD_SOL_PRM_LABORAL('${funcion}','${usr_adicion}',null,${cod_persona},'${tip_solicitud}','${des_solicitud}','${fec_inicio}','${fec_final}',null,null)`;
  conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

  //Lista de aprobacion 
  app.post('/permiso/result', (req, res) => {
    const { funcion,cod_sol_permiso,ind_solicitud } = req.body;
    console.log(req.body)
    const query =` CALL CRUD_SOL_PRM_LABORAL('${funcion}',null,${cod_sol_permiso},null,null,null,null,null,'${ind_solicitud}',null)`;
    conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });
  

module.exports = app;