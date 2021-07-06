class Clima{
	constructor(ciudad, grados, factor, dia){
		this.ciudad = ciudad;
		this.grados = grados;
		this.factor = factor;
		this.dia = dia;
	}

	mostrar(){
		console.log(`${this.ciudad} esta en: ${this.grados} grados y ${this.factor} al día de: ${this.dia} `);
	}
}

let ciudadUsuario = prompt("¿Cual es tu ciudad: ?");

const ClimaUsuario = new Clima(ciudadUsuario, 18, "Parcialmente Nublado", "Lunes, 5 Julio");
const ClimaDefinido = [];

ClimaDefinido.push(ClimaUsuario);

ClimaUsuario.mostrar();

ClimaDefinido.forEach(elemento => {
	console.log(elemento);
});