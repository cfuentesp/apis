var conn = require('../database');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Lista de bitacora 
app.post('/bitacora/get', (req, res) => {
    const { funcion } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_BIT_MJR_CONTINUA('${funcion}',null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Datos de bitacora
app.post('/bitacora/search', (req, res) => {
    const { funcion,cod_bit_mejora } = req.body;
    console.log(req.body)
    const query =` CALL CRUD_BIT_MJR_CONTINUA('${funcion}',null,${cod_bit_mejora},null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

 //Update datos de bitacora
 app.post('/bitacora/update', (req, res) => {
    const { funcion,usr_adicion,cod_bit_mejora,des_observacion,fec_observacion } = req.body;
    console.log(req.body)
    const query =` CALL CRUD_BIT_MJR_CONTINUA('${funcion}','${usr_adicion}',${cod_bit_mejora},null,'${des_observacion}','${fec_observacion}')`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Lista de bitacora 
app.post('/bitacora/delete', (req, res) => {
    const { funcion,cod_bit_mejora} = req.body;
    console.log(req.body)
    const query =` CALL CRUD_BIT_MJR_CONTINUA('${funcion}',null,${cod_bit_mejora},null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });




 //Insert transaccional datos de bitacora
 app.post('/bitacora/insert', (req, res) => {
  const { funcion,usr_adicion,cod_persona,des_observacion,fec_observacion } = req.body;
  console.log(req.body)
  const query =` CALL CRUD_BIT_MJR_CONTINUA('${funcion}','${usr_adicion}',null,${cod_persona},'${des_observacion}','${fec_observacion}')`;
  conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

module.exports = app;