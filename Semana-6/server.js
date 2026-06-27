const express = require('express');
const app = express();

app.use(express.json());

// Ruta GET solo para comprobar desde el navegador que el servidor funciona
app.get('/registro', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Ruta POST para recibir datos
app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });

});

// Ruta POST para registrar incidencias
app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });

});

app.listen(3000, () => {
  console.log('El Servidor se estara ejecutándo en el puerto 3000');
});