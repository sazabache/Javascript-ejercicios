// Escribe aquí tu codigo Javascript
function determinante(){
	var a = parseInt(prompt("Ingrese el primer elemento de la primera fila : "));
	var b = parseInt(prompt("Ingrese el segundo elemento de la primera fila : "));
	var c = parseInt(prompt("Ingrese el primer elemento de la segunda fila : "));
	var d = parseInt(prompt("Ingrese el segundo elemento de la segunda fila : "));
	var resultado = (a*d) - (b*c);
	alert("El determinante de segundo orden es: "+resultado);
}
determinante();

