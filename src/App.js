const path = require("path");
const express = require('express');
const app = express();

// Modulo para metodos http
const morgan = require('morgan');

// Modulo para conexión a MongoDB

const mongoose = require('mongoose');

//conexión a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/dbtaskspa')
.then( db => console.log('La conexión a la base de dbtasks, se realizó correctamente...'))
.catch( error => console.log(error));

// Importar rutas ---- Pendiente
const indexRoutes = require('./routes/index');

app.set('port',process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));

// Definición del motor de plantillas - ejs
app.set('view engine','ejs');
// middleware de morgan
app.use(morgan('dev'));

app.use(express.urlencoded({extended:true})); //parsear los datos de las vistas en formato json

// Pendiente app.use (rutas - crud)

app.use('/',indexRoutes);

app.listen(app.get('port'), () => {
    console.log(`El servidor está en http://localhost:${app.get('port')}`);
})

