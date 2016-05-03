function suma(){
	var numeros = [ ];
	var suma = 0;
	for(var i=1; i<=10; i++){
		var num = parseInt(prompt("Ingresa el número "+i));
		numeros.push(num);
		suma += num;
	}
	return suma+"\n los 10 números son: "+numeros;
};

alert("La suma de los números es: "+suma());