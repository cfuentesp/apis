const mysql = require('mysql');
const express = require("express");
const app = express();
const bp = require("body-parser");

// Settings
app.set("port", 6000);

// Middlewares
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({
  extended: true, limit:'10mb'
}));


// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port: ${app.get("port")}`);
});


app.get('/', (req, res) =>res.send('Hola mundo'));

// Routes
app.use(require("./routes/login"));
app.use(require("./routes/act_mes"));
app.use(require("./routes/bit_mjr_continua"));
app.use(require("./routes/dis_mantenimiento"));
app.use(require("./routes/inventario"));
app.use(require("./routes/persona"));
app.use(require("./routes/evl_personal"));
app.use(require("./routes/sol_apb_compra"));
app.use(require("./routes/sol_compra"));
app.use(require("./routes/sol_mnt_dispositivos"));
app.use(require("./routes/sol_prm_laboral"));