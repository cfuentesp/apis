var conn = require('../database');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Lista de aprobacion 
app.post('/aprobacion/get', (req, res) => {
    const { funcion } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_APB_COMPRA('${funcion}',null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Datos de aprobacion
app.post('/aprobacion/search', (req, res) => {
    const { funcion,cod_sol_apb_compra } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_APB_COMPRA('${funcion}',null,${cod_sol_apb_compra},null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

 //Update datos de aprobacion
 app.post('/aprobacion/update', (req, res) => {
    const { funcion,usr_adicion,cod_sol_apb_compra,cod_equipo,cod_reparacion,coz_equipo,fec_solicitud,ind_solicitud } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_APB_COMPRA('${funcion}','${usr_adicion}',${cod_sol_apb_compra},null,null,'${coz_equipo}','${fec_solicitud}',null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });


  //Lista de aprobacion 
app.post('/aprobacion/delete', (req, res) => {
    const { funcion,cod_sol_apb_compra} = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_APB_COMPRA('${funcion}',null,${cod_sol_apb_compra},null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });




  //Insert datos de aprobacion
  app.post('/aprobacion/insert', (req, res) => {
    const { funcion,usr_adicion,cod_equipo,cod_reparacion,coz_equipo,fec_solicitud } = req.body;
    console.log(req.body)
    const query =` CALL CRUD_SOL_APB_COMPRA('${funcion}','${usr_adicion}',null,${cod_equipo},${cod_reparacion},'${coz_equipo}','${fec_solicitud}',null)`;
    conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Lista de aprobacion 
app.post('/aprobacion/result', (req, res) => {
  const { funcion,cod_sol_apb_compra,ind_solicitud } = req.body;
  console.log(req.body)
  const query =` CALL CRUD_SOL_APB_COMPRA('${funcion}',null,${cod_sol_apb_compra},null,null,null,null,'${ind_solicitud}')`;
  conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

module.exports = app;