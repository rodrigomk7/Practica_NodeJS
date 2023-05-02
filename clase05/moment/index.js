// importar moment.js usando require
const moment = require('moment');

// obtener la fecha actual
const fechaActual = moment();

// obtener la fecha de nacimiento
const fechaNacimiento = moment('00-01-01');

// validar que la fecha de nacimiento sea válida
if (!fechaNacimiento.isValid()) {
  console.log('La fecha de nacimiento no es válida');
  return;
}

// calcular la diferencia en días entre la fecha actual y la de nacimiento
const diasPasados = fechaActual.diff(fechaNacimiento, 'days');

console.log(`Han pasado ${diasPasados} días desde mi nacimiento`);



/*
const hoy = moment()
const nacimiento = moment("29/11/1968", "DD/MM/YYYY")

const difYear = hoy.diff(nacimiento, 'years');
const difDays = hoy.diff(nacimiento, 'days');

console.log(`Hoy es ${hoy.format("DD/MM/YYYY")}`)
console.log(`Nací el ${nacimiento.format("DD/MM/YYYY")}`)
console.log(`Desde mi nacimiento han pasado ${difYear} años.`)
console.log(`Desde mi nacimiento han pasado ${difDays} días.`) */



const fecha = moment('2023-04-20');
console.log(fecha.fromNow()); // muestra "en 7 días"
