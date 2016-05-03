var suma = null;
var suma2 = null;
for(var c=1;c<=3; c++){
	var lista1 = parseInt(prompt("Ingrese lista1:"));
	suma += lista1;
}
for(var i=1;i<=3; i++){
	var lista2 = parseInt(prompt("Ingrese lista2:"));
	suma2 += lista2;
}
if (suma<suma2){
	alert("Lista1 es menor que Lista2");
}else if(suma>suma2){
	alert("Lista1 es mayor que Lista2");
}else{
	alert("Lista1 es igual a Lista2");
}



