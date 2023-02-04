var conn = require('../database');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Lista de compra 
app.post('/compra/get', (req, res) => {
    const { funcion } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_COMPRA('${funcion}',null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Datos de compra
app.post('/compra/search', (req, res) => {
    const { funcion,cod_sol_compra } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_COMPRA('${funcion}',null,${cod_sol_compra},null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

 //Update datos de compra
 app.post('/compra/update', (req, res) => {
    const { funcion,usr_adicion,cod_sol_compra,fec_solicitud,des_solicitud } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_COMPRA('${funcion}','${usr_adicion}',${cod_sol_compra},null,null,'${fec_solicitud}','${des_solicitud}',null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Lista de compra 
app.post('/compra/delete', (req, res) => {
    const { funcion,cod_sol_compra} = req.body;
    console.log(req.body)
      const query =` CALL CRUD_SOL_COMPRA('${funcion}',null,${cod_sol_compra},null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });




  //Insert datos de compra
  app.post('/compra/insert', (req, res) => {
    const { funcion,usr_adicion,cod_sol_apb_compra,cod_reparacion,fec_solicitud,des_solicitud } = req.body;
    console.log(req.body)
    const query =` CALL CRUD_SOL_COMPRA('${funcion}','${usr_adicion}',null,${cod_sol_apb_compra},${cod_reparacion},'${fec_solicitud}','${des_solicitud}',null)`;
    conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

    //Datos de compra
app.post('/compra/result', (req, res) => {
  const { funcion,cod_sol_compra,ind_solicitud } = req.body;
  console.log(req.body)
    const query =` CALL CRUD_SOL_COMPRA('${funcion}',null,${cod_sol_compra},null,null,null,null,'${ind_solicitud}')`;
    conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});
module.exports = app;