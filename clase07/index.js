const express = require('express');
const app = express();

app.use(express.json());




let frase = 'Esta es una frase de ejemplo';
let palabras = frase.split(' ');

////http://localhost:8080/api/frase
app.get('/api/frase', (req, res) => {
  const resultado = {
    frase: frase
  };
  res.json(resultado);
});


//http://localhost:8080/api/palabras/:pos, donde :pos es la posición de la palabra que deseas buscar en la frase.
app.get('/api/palabras/:pos', (req, res) => {
  const posicion = req.params.pos;
  const palabras = frase.split(' ');
  const buscada = palabras[posicion - 1];
  const resultado = {
    buscada: buscada
  };
  res.json(resultado);
});

/* POST a http://localhost:8080/api/palabras con un objeto JSON que contenga la palabra que deseas agregar en el siguiente formato:

{
  "palabra": "nuevaPalabra"
}

*/
app.post('/api/palabras', (req, res) => {
  const nuevaPalabra = req.body.palabra;
  palabras.push(nuevaPalabra);
  frase = palabras.join(' ');
  const posicion = palabras.length;
  const resultado = {
    agregada: nuevaPalabra,
    pos: posicion
  };
  res.json(resultado);
});


/* http://localhost:8080/api/palabras/{posicion} con un objeto JSON que contenga la palabra que deseas actualizar en el siguiente formato:
{
  "palabra": "nuevaPalabra"
}

Reemplaza "posicion" con la posición de la palabra que deseas actualizar y "nuevaPalabra" con la nueva palabra que deseas agregar.

*/
app.put('/api/palabras/:pos', (req, res) => {
    const posicion = req.params.pos;
    const nuevaPalabra = req.body.palabra;
    const anteriorPalabra = palabras[posicion - 1];
    palabras[posicion - 1] = nuevaPalabra;
    frase = palabras.join(' ');
    const resultado = {
      actualizada: nuevaPalabra,
      anterior: anteriorPalabra
    };
    res.json(resultado);
  });


/*   DELETE a http://localhost:8080/api/palabras/{posicion} para eliminar la palabra en la posición dada. 
Reemplaza "posicion" con la posición de la palabra que deseas eliminar.*/
app.delete('/api/palabras/:pos', (req, res) => {
    const posicion = req.params.pos;
    const palabraEliminada = palabras.splice(posicion - 1, 1)[0];
    frase = palabras.join(' ');
    const resultado = {
      eliminada: palabraEliminada
    };
    res.json(resultado);
  });
  

//server
app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080');
});
