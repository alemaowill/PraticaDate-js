
var data = new Date();
var dia = data.getDate();
var mes = (data.getMonth() + 1);
var ano = data.getFullYear();
var horas = data.getHours();
var minuto = data.getMinutes();
var segundo = data.g
var segundo = data.getSeconds();

if(horas < 10){
horas = "0" + data.getHours();
}
if(minuto < 10){
minuto = "0" + data.getMinutes();
}
if(segundo < 10){
segundo = "0" + data.getSeconds();
}

if(dia < 10){
dia = "0" + data.getDate();
}
if(mes < 10){
mes = "0" + (data.getMonth() + 1);
}
if(ano < 10){
ano = "0" + data.getFullYear();
}

dataConvertida = dia + "/" + mes + "/" + ano + " " + horas + ":" + minuto + ":" + segundo;
