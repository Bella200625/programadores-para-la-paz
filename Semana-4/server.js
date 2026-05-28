/*
Este archivo llamado server.js fue creado para construir un servidor básico
utilizando Node.js y Express. su función es permitir que el servidor responda solicitudes realizadas
desde el navegador web.
*/


// En este caso guardaremos Express dentro de una constante llamada "express"
// "require('express')" importa el módulo Express, el cual fue instalado previamente.

const express = require('express');

// Creamos una aplicación usando Express.
// "app" es el nombre que normalmente se utiliza para representar la aplicación principal.
// "express()" ejecuta la función de Express y crea nuestra aplicación web.

const app = express();

// "app.get()" crea una ruta usando el método GET.
// El símbolo "/" representa la ruta principal del servidor es decir, la página inicial
// "req" significa request (solicitud) Contiene la información enviada por el usuario
// "res" significa response (respuesta) se usa para responder al usuario
// "=>"" representa una función flecha de JavaScript.

app.get('/', (req, res) => {

// "res.send()" envía una respuesta al navegador.

res.send('Servidor funcionando correctamente, FELICIDADES.');

});

// "app.listen()" inicia el servidor.

/* El número 3000 representa el puerto donde funcionará el servidor.
Un puerto es un canal de comunicación que permite acceder al servidor desde el navegador.
- "console.log()" muestra mensajes en la consola para indicar que el servidor se ejecutó correctamente.
*/
app.listen(3000, () => {

console.log('Servidor ejecutándose en puerto 3000 yeeeeeeeeeeeeeeeeeeaaaa');

});
