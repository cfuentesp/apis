var conn = require('../database');
const express = require('express');
const app = express();
const mysql = require("mysql");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const generateAccessToken = require("../generateAccessToken")
const port = process.env.TOKEN_SERVER_POR

//import the generateAccessToken function
//LOGIN (AUTHENTICATE USER, and return accessToken)
app.post("/login", async (req, res)=> {
const user = req.body.name
const usuaio = req.user
const password = req.body.password
const sqlSearch = `SELECT * FROM users WHERE email = '${user}'`
 const search_query = mysql.format(sqlSearch)
await conn.query (search_query, async (err, result) => {
//connection.release()
  
  if (err) throw (err)
if (result.length == 0) {
   console.log("--------> User does not exist")
   res.sendStatus(404)
  } 
  else {
   const hashedPassword = result[0].password
   //get the hashedPassword from result
if (await bcrypt.compare(password, hashedPassword)) {
    console.log("---------> Login Successful")
    console.log("---------> Generating accessToken")
    const token = generateAccessToken({user: usuaio})   
    console.log(token)
    res.json({accessToken: token})
   } else {
    res.send("Password incorrect!")
   } //end of Password incorrect
}//end of User exists
}) //end of connection.query()
}) //end of db.connection()
//end of app.post()


//LOGIN (AUTHENTICATE USER)
app.post("/logout", async (req, res)=> {
  const user = req.body.name
  const password = req.body.password

   const sqlSearch = `SELECT * FROM users WHERE email = '${user}'`
   const search_query = mysql.format(sqlSearch)
   await conn.query (search_query, async (err, result) => {
    //connection.release()
    
    if (err) throw (err)
    if (result.length == 0) {
     console.log("--------> User does not exist")
     res.sendStatus(404)
    } 
    else {
       const hashedPassword = result[0].password
       //get the hashedPassword from result
      if (await bcrypt.compare(password, hashedPassword)) {
      console.log("---------> Login Successful")
      res.send(`${user} is logged in!`)
      } 
      else {
      console.log("---------> Password Incorrect")
      res.send("Password incorrect!")
      } //end of bcrypt.compare()
    }//end of User exists i.e. results.length==0
   }) //end of connection.query()
  }) //end of db.connection()
 //end of app.post()


//CREATE USER
const bcrypt = require("bcrypt")
app.use(express.json())
app.post("/createUser", async (req,res) => {
const user = req.body.name;
const email = req.body.email;
const hashedPassword = await bcrypt.hash(req.body.password,10);
console.log(req.body);
 const sqlSearch = `SELECT * FROM users WHERE name = '${user}'`
 const search_query = mysql.format(sqlSearch)
 const sqlInsert = `INSERT INTO users VALUES (null,'${user}','${email}',null,'${hashedPassword}',null,now(),null)`
 const insert_query = mysql.format(sqlInsert)
 await conn.query (search_query, async (err, result) => {
  if (err) throw (err)
  console.log("------> Search Results")
  console.log(result.length)
  if (result.length != 0) {
   console.log("------> User already exists")
   res.sendStatus(409) 
  } 
  else {
   await conn.query (insert_query, (err, result)=> {
   if (err) throw (err)
   console.log ("--------> Created new User")
   console.log(result.insertId)
   res.sendStatus(201)
  })
 }
}) //end of connection.query() //end of db.getConnection()
}) //end of app.post()


 //Get lista usuarios
 app.post('/usuarios/get', (req, res) => {
  console.log(req.body)
  const query =`SELECT * FROM users WHERE id <> 1`;
  conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

 //Get lista roles
app.post('/roles/get', (req, res) => {
  console.log(req.body)
  const query =`SELECT * FROM roles WHERE id <> 1`;
  conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

 //Get lista permisos
app.post('/permission/get', (req, res) => {
  console.log(req.body)
  const query =`Select * from permissions`;
  conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

 //Get lista permisos de un role
app.post('/permissionRole/get', (req, res) => {
  const { role_id } = req.body;
  console.log(req.body)
  const query =`SELECT per.name, per.description,per.id, rol.role_id FROM permissions per INNER JOIN permission_role rol ON per.id=rol.permission_id WHERE rol.role_id=${role_id} `;
  conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

 //Get lista roles de un usuario
app.post('/rolesUser/get', (req, res) => {
  const { user_id } = req.body;
  console.log(req.body)
  const query =`SELECT rol.description,rol.id,rol.name FROM roles rol INNER JOIN role_user roluser ON rol.id = roluser.role_id WHERE roluser.user_id = ${user_id} `;
  conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

 //Get lista correos
app.post('/correos/get', (req, res) => {
  const { funcion } = req.body;
  console.log(req.body)
  const query =` CALL CRUD_CORREOS('${funcion}',null,null,null)`;
  conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

 //search correo
app.post('/correos/search', (req, res) => {
  const { funcion,cod_correo } = req.body;
  console.log(req.body)
  const query =` CALL CRUD_CORREOS('${funcion}',null,${cod_correo},null)`;
  conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

//update correo
app.post('/correos/update', (req, res) => {
  const { funcion,cod_correo,usr_adicion,correo } = req.body;
  console.log(req.body)
  const query =` CALL CRUD_CORREOS('${funcion}','${usr_adicion}',${cod_correo},'${correo}')`;
  conn.query(query, (err,rows,) => {
        if(!err) {
            res.json(rows)
            }else{
            console.log(err);
            }
     });
});

module.exports = app;