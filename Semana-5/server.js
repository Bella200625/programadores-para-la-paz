/*
Este archivo server.js fue creado para construir un servidor
utilizando Node.js y Express.

El servidor permite crear diferentes rutas
y responder solicitudes realizadas desde el navegador.
*/

// Importamos el Express

const express = require('express');

// Creamos la aplicación principal del servidor.

const app = express();

// Permitimos que el servidor pueda leer datos JSON enviados por el usuario

app.use(express.json());


// Ruta principal del servidor
app.get('/', (req, res) => {
// Enviamos un mensaje simple al navegador
    res.send('Servidor activo');}
);



// Ruta de saludo
app.get('/saludo', (req, res) => {
// Mostramos un saludo cuando el usuario entra a esta URL
    res.send('Hola comunidad');
});



// Ruta dinámica que recibe un nombre desde la URL
app.get('/mensaje/:nombre', (req, res) => {
const nombre = req.params.nombre;

// Respondemos usando el nombre recibido.
    res.send('Hola ' + nombre);
});


// Ruta POST para recibir reportes enviados por usuarios
app.post('/reporte', (req, res) => {
// Obtenemos el mensaje enviado en el body
const mensaje = req.body.mensaje;
// Respondemos en formato JSON.
    res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
});

});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
// Mostramos un mensaje en consola indicando que el servidor funciona
    console.log('Servidor ejecutándose en puerto 3000');

});
