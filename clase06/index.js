const express = require('express');
const app = express();
const port = 8080;

// Endpoint para la bienvenida
app.get('/bienvenida', (req, res) => {
  const respuesta = '<html><body style="color:blue">Bienvenido</body></html>';
  res.send(respuesta);
});

// Endpoint para el usuario
app.get('/usuario', (req, res) => {
  const usuario = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 32,
    correo: 'juan.perez@example.com'
  };
  res.send(usuario);
});

const path = require('path');

app.get('/bien', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



//server status
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
