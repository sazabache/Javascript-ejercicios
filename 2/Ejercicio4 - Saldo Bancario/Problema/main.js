// Escribe aquí tu codigo Javascript
function saldo(){
	var contador = 0;
	var cuentas = parseInt(prompt("Ingrese cúantas cuentas corrientes van a ser procesadas: "));
	for (i=1; i<=cuentas; i++){
		var numeroDeCuenta = parseInt(prompt("Ingrese el número de cuenta de la cuenta corriente número "+i));
		if(numeroDeCuenta<0){
			alert(numeroDeCuenta+" no es una cuenta válida.");
			break;
		}
		var nombre = prompt("Ingrese el nombre del cliente:");
		var saldo = parseInt(prompt("Ingrese el saldo actual de la cuenta: "));
		function saldo2(){
			if(saldo>0){
				contador += saldo;
				return "Acreedor";

			} else if (saldo<0){
				return "Deudor";
			}else if (saldo ===0){
				return "Nulo";
			}
		}
		alert("Los datos de la cuenta número " +i+ "son :"+"\n Número de cuenta: "+numeroDeCuenta+ "\n Nombre del cliente: "+nombre+"\n Saldo: "+saldo2(saldo));
	}
	alert("La suma del saldo contable de todas las cuentas es : " +contador);
};

saldo();


