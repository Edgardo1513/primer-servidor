// Importar express
const express = require('express');

const app = express();

//un cliente realiza una petición

// el servidor atiende esa petición y responde al cliente

// metodo, url ...

//url https://pokeapi.co /v2/pokemon
//           url            ruta

//estructura para responder una petición
app.get('/', (request, response) => {
    response.send('Hola mundo desde mi servidor de express')
});

app.get('/contacto', (request, response) => {
    response.send('Aqui estarian los contacto')
});

//se termina el código

//Debemos dejar al servidor escuchando las peticiones entrantes

app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 8000");
});

//correr este archivo con node