// Entidades

class Clima{
	constructor(ciudad, grados, factor, dia){
		this.ciudad = ciudad;
		this.grados = grados;
		this.factor = factor;
		this.dia = dia;
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
let filtroSelect = document.getElementById("filtroSelect");

// let iconImgClima = document.getElementById("imagenClima");

let fechaActual = document.getElementById("fechaActual");
let fechaMañana = document.getElementById("fechaMañana");
let fechaPasadoMañana = document.getElementById("fechaPasadoMañana");
let mostrarClima = document.getElementById("mostrarClima");

let gradosClima = document.getElementById("grados");
let factorClima = document.getElementById("factor");
let ciudad = document.getElementById("ciudad");

let climaMax = document.getElementById("climaMax");
let climaMin = document.getElementById("climaMin");
let viento = document.getElementById("viento");
let sensacionTer = document.getElementById("sensacionTermica");
let humedad = document.getElementById("humedad");


// Selectores------------------------------------

// Funcion Guardar Datos-------------------------

function guardarDatosClima(e){
	e.preventDefault();

// Selectores------------------------------------

	let ciudadUsuario = document.getElementById("filtroSelect").value;
	const ClimaUsuario = new Clima(ciudadUsuario, 18, "Parcialmente Nublado", fechaTexto(fecha));
	// Url de conexion api concatenando el valor de la ciudad
	const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ciudadUsuario+'&units=metric&lang=sp&appid=509a71114c79dce7fe4e067058ed0286';
	// console.log(url);

// Selectores------------------------------------

	ClimaDefinido.push(ClimaUsuario);

	// Imprime en mi id=ciudad lo que traiga mi Valor de ciudadUsuario
	ciudad.textContent = ciudadUsuario;

	// API CLIMA Openweathermap ---------------------
	
	// Conexion por fetch y agregar variables que se van a utilizar

	fetch(url).then(response => response.json())
	.then(data => {
		let nombreCiudadData = data['name'];
		let idClima = data['id'];

		let temperatura = data['main']['temp'];
		let sensacionTermica = data['main']['feels_like'];
		let humedadClima = data['main']['humidity'];
		let temperaturaMinima = data['main']['temp_min'];
		let temperaturaMaxima = data['main']['temp_max'];

		let statusClima = data['weather'];
		let statusClimaDescripcion = data['weather'][0]['description'];
		let iconClimaDescripcion = data['weather'][0]['icon'];

		let vientoClima = data['wind']['speed'];
		

		// Imprimir los datos del clima - dependiendo de la respuesta del usuario
		gradosClima.textContent = Math.round(temperatura);
		factorClima.textContent = statusClimaDescripcion;
		climaMax.textContent = `${Math.round(temperaturaMaxima)} °C /`;
		climaMin.textContent = `${Math.round(temperaturaMinima)} °C`;
		viento.textContent = `${vientoClima} km/h`;
		sensacionTer.textContent = `${Math.round(sensacionTermica)} °C`;
		humedad.textContent = `${humedadClima} %`;

		// jQuery Animación de Imagen del Clima

		$(function mostrarImagen() { 
			// console.log(iconClimaDescripcion);
			$("#imagenClima").attr("src",`http://openweathermap.org/img/wn/${iconClimaDescripcion}@2x.png`);
		});
	})
	.catch(error => alert("Nombre de la ciudad Invalido"));

	// API CLIMA Openweathermap ---------------------
}

// Evento Mostrar Clima--------------------------

// mostrarClima.addEventListener("click", guardarDatosClima);
filtroSelect.addEventListener("change", guardarDatosClima);

// Evento Mostrar Clima--------------------------

// Funcion Guardar Datos-------------------------


// Funcion Fecha Actual -------------------------

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