// Escribe aquí tu codigo Javascript
function radio(){
	var pi = Math.PI;
	var radio = parseInt(prompt("Ingresa el valor de radio del círulo: "))
	var resultado = pi * Math.pow(radio,2);
	alert("El área del círculo es : "+resultado.toFixed(2));
}
radio();


