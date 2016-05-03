// Escribe aquí tu codigo Javascript
function operar(){
	var a = parseInt(prompt("Ingrese un primer número :"));
	var b = parseInt(prompt("Ingrese un segundo número :"));
	if(a>b){
		var resta = a-b;
		var suma = a+b;
		alert("La resta de los ambos números es " +resta+ " y la suma de los dos números es " +suma);
	} else if (a===b){
		alert("Los dos números son iguales!")
	} else if (b>a){
		var multiplicar = a*b;
		var dividir =b/a;
		alert("La multiplicación de los dos números es "+multiplicar+" y la división entre ambos números es "+dividir)
	}
};
operar();



