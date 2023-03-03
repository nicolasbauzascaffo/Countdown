/* Primero restamos la fecha final menos la actiual */
var ahora = new Date();
var final = new Date(2100, 0, 1);
var resta = final - ahora;

/* Luego calculo los milisegundo para obtener segundos, minutos, horas, dias y años */
var milisegundos = resta % 1000;
resta = resta - milisegundos;
var segundos = Math.floor(resta / 1000) % 60;
resta = Math.floor(resta / 1000 / 60);
var minutos = resta % 60;
resta = Math.floor(resta / 60);
var horas = resta % 24;
resta = Math.floor(resta / 24);
var años = Math.floor(resta / 365);
var dias = resta % 365;

/* Luego largo el timer y lo finalizo cuando esté todo en 0 */
const Timer = setInterval(() => {
  segundos--;
  if (segundos < 1) {
    minutos--;
    segundos = 59;
  }
  if (minutos < 1) {
    horas--;
    minutos = 59;
  }
  if (horas < 1) {
    dias--;
    horas = 23;
  }
  if (dias < 1) {
    años--;
    dias = 364;
  }
  if (
    segundos === 0 &&
    minutos === 0 &&
    horas === 0 &&
    dias === 0 &&
    años === 0
  ) {
    clearInterval(Timer);
  }
  document.getElementById("segundos").innerHTML = segundos
    .toString()
    .padStart(2, "0");
  document.getElementById("minutos").innerHTML = minutos
    .toString()
    .padStart(2, "0");
  document.getElementById("horas").innerHTML = horas
    .toString()
    .padStart(2, "0");
  document.getElementById("dias").innerHTML = dias.toString().padStart(3, "0");
  document.getElementById("años").innerHTML = años.toString().padStart(2, "0");
}, 1000);
