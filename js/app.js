// Entidades

class Clima{
	constructor(ciudad, grados, factor, dia){
		this.ciudad = ciudad;
		this.grados = grados;
		this.factor = factor;
		this.dia = dia;
	}

	// 	Metodos

	mostrar(){
		console.log(`${this.ciudad} esta en: ${this.grados} grados y ${this.factor} al día de: ${this.dia} `);
	}
}

// Arreglos -------------------------------------

const ClimaDefinido = [];

const fecha = new Date();
// console.log(fechaTexto(fecha));

const mañana = new Date(fecha);
mañana.setDate(mañana.getDate() + 1);
// console.log(fechaTexto(mañana));

const pasadoMañana = new Date(mañana);
pasadoMañana.setDate(pasadoMañana.getDate() + 1);
// console.log(fechaTexto(pasadoMañana));

// Arreglos -------------------------------------

// Selectores------------------------------------

let fechaActual = document.getElementById("fechaActual");
let fechaMañana = document.getElementById("fechaMañana");
let fechaPasadoMañana = document.getElementById("fechaPasadoMañana");
let mostrarClima = document.getElementById("mostrarClima");
let ciudad = document.getElementById("ciudad");

// Selectores------------------------------------

// Funcion Guardar Datos-------------------------

function guardarDatosClima(e){
	e.preventDefault();

// Selectores------------------------------------

	let ciudadUsuario = document.getElementById("filtroSelect").value;
	const ClimaUsuario = new Clima(ciudadUsuario, 18, "Parcialmente Nublado", fechaTexto(fecha));

// Selectores------------------------------------

	ClimaDefinido.push(ClimaUsuario);

	ClimaUsuario.mostrar();

	ClimaDefinido.forEach(elemento => {
		console.log(elemento);
	});

	let escribirCiudad = document.createElement("p");
		escribirCiudad.textContent = ciudadUsuario;
		ciudad.appendChild(escribirCiudad);
}

mostrarClima.addEventListener("click", guardarDatosClima);

// Funcion Guardar Datos-------------------------

// Funcion Fecha Actual -------------------------

// Funcion
function fechaTexto(fecha){

	// Arreglos
	let dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
	let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

	//getDay() devuelve el dia de la semana.(0-6)
	let numeroDiaSemana = fecha.getDay();
	//El día de la semana en letras. getDay() devuelve el dia de la semana.(0-6)
	let diaLetras = dias[fecha.getDay()];
	//El mes en letras
	let mesLetras = meses[fecha.getMonth()];
	//getDate() devuelve el dia(1-31).
	let diaMes = fecha.getDate();

	let devolverFecha = diaLetras+ ", " + diaMes + " de " + mesLetras;
    return devolverFecha;
}

function imprimirFecha(){
	
let escribirFechaAtual = document.createElement("p");
	escribirFechaAtual.textContent = fechaTexto(fecha);
	fechaActual.appendChild(escribirFechaAtual);

let escribirFechaMañana = document.createElement("p");
	escribirFechaMañana.textContent = fechaTexto(mañana);
	fechaMañana.appendChild(escribirFechaMañana);

let escribirFechaPasadoMañana = document.createElement("p");
	escribirFechaPasadoMañana.textContent = fechaTexto(pasadoMañana);
	fechaPasadoMañana.appendChild(escribirFechaPasadoMañana);
}

imprimirFecha();

// Funcion Fecha Actual -------------------------