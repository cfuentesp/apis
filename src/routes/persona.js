var conn = require('../database');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Lista de personas
app.post('/persona/get', (req, res) => {
    const { funcion } = req.body;
    console.log(req.body)
    const query =` CALL CRUD_PERSONAS('${funcion}',null,null,null,null,null,null,null,null,null,null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

  //Datos de persona
app.post('/persona/search', (req, res) => {
    const { funcion,cod_persona } = req.body;
    console.log(req.body)
    const query =` CALL CRUD_PERSONAS('${funcion}',null,${cod_persona},null,null,null,null,null,null,null,null,null)`;
    conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

    //Datos de persona
app.post('/persona/delete', (req, res) => {
  const { funcion,cod_persona } = req.body;
  console.log(req.body)
  const query =` CALL CRUD_PERSONAS('${funcion}',null,${cod_persona},null,null,null,null,null,null,null,null,null)`;
  conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

 //Update datos de persona
 app.post('/persona/update', (req, res) => {
    const { funcion,usr_adicion,cod_persona,rol_persona,nom_persona,apll_persona,num_identidad,fec_nacimiento,des_ref_persona,num_ref_persona,cor_persona,sex_persona } = req.body;
    console.log(req.body)
      const query =` CALL CRUD_PERSONAS('${funcion}','${usr_adicion}',${cod_persona},'${rol_persona}','${nom_persona}','${apll_persona}',${num_identidad},'${fec_nacimiento}','${des_ref_persona}',${num_ref_persona},'${cor_persona}','${sex_persona}')`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

   //Insert persona
 app.post('/persona/insert', (req, res) => {
  const {rol_persona,nom_persona,apll_persona,identidad,sex_persona,fec_nacimiento,direccion,telefono,referencia,num_referencia,cor_persona,usr_adicion } = req.body;
  console.log(req.body)
    const query =` CALL TRANS_PERSONAS('${rol_persona}','${nom_persona}','${apll_persona}',${identidad},'${sex_persona}','${fec_nacimiento}','${direccion}',${telefono},'${referencia}',${num_referencia},'${cor_persona}','${usr_adicion}')`;
    conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

   //Get direcciones
   app.post('/direcciones/get', (req, res) => {
    const {funcion,cod_persona} = req.body;
    console.log(req.body)
      const query =` CALL TRANS_DIRECCIONES('${funcion}',null,${cod_persona},null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

   //Insertar direccciones
   app.post('/direcciones/insert', (req, res) => {
    const {funcion,usr_adicion,cod_persona,direccion } = req.body;
    console.log(req.body)
    const query =` CALL TRANS_DIRECCIONES('${funcion}','${usr_adicion}',${cod_persona},null,'${direccion}')`;
    conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

     //eliminar direcciones
     app.post('/direcciones/delete', (req, res) => {
      const {funcion,cod_direccion } = req.body;
      console.log(req.body)
      const query =` CALL TRANS_DIRECCIONES('${funcion}',null,null,${cod_direccion},null)`;
      conn.query(query, (err,rows,) => {
            if(!err) {
                res.json(rows)
                }else{
                console.log(err);
                }
         });
    }); 

    //Get telefonos
   app.post('/telefonos/get', (req, res) => {
    const {funcion,cod_persona} = req.body;
    console.log(req.body)
      const query =` CALL TRANS_TELEFONOS('${funcion}',null,${cod_persona},null,null)`;
      conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

   //Get telefonos
   app.post('/telefonos/insert', (req, res) => {
    const {funcion,usr_adicion,cod_persona,telefono} = req.body;
    console.log(req.body)
    const query =` CALL TRANS_TELEFONOS('${funcion}','${usr_adicion}',${cod_persona},null,'${telefono}')`;
    conn.query(query, (err,rows,) => {
          if(!err) {
              res.json(rows)
              }else{
              console.log(err);
              }
       });
  });

     //Get telefonos
     app.post('/telefonos/delete', (req, res) => {
      const {funcion,cod_telefono } = req.body;
      console.log(req.body)
      const query =` CALL TRANS_TELEFONOS('${funcion}',null,null,${cod_telefono},null)`;
        conn.query(query, (err,rows,) => {
            if(!err) {
                res.json(rows)
                }else{
                console.log(err);
                }
         });
    }); 

    

module.exports = app