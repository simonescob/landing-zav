"use strict";

// importaciones necesarias
const express = require("express");
const bodyparser = require("body-parser");
const app = express();


let port = 4545;

app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

// Esto es para que body parser funcione
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// declaracion de la variable images que contiene el array con imagenes y text
let images = [
	{
		image: "https://i.imgur.com/8KB1b9C.png",
		title: "Este puede ser si sonrisa",
		link: {
			url: "https://i.imgur.com/8KB1b9C.png",
			title: "información de la imagen"
		}
	},
	{
		image: "https://i.imgur.com/wyoqw17.jpg",
		title: "Mira esta sonrisa",
		link: {
			url: "https://i.imgur.com/wyoqw17.jpg",
			title: "información sobre esta foto"
		}
	},
	{
		image: "https://i.imgur.com/eZuBkaS.jpg",
		title: "Mira lo bueno que piedes quedar",
		link: {
			url: "https://i.imgur.com/eZuBkaS.jpg",
			title: "información de la imagen"
		}
	},
];


// declaracion de la variable text que contiene el tíltulo y una lista de textos
let text = [{
	title: "Queremos que tengas la mejor versión de tu sonrisa, para toda la vida.",
	items: [
		"Recupera la apariencia física como si fuera un diente natural. ‘Altamente estéticos”",
		"Comportamiento similar a la raíz del diente que te garantiza total discreción y mayor higiene.", 
		"Máxima oseointegración en menos tiempo gracias a su diseño y material 100% biocompatible.",
		"Procedimientos realizados por especialistas con experiencia.", 
		"Mayor seguridad para hablar y masticar.",
		"Reduce la perdida de hueso de los maxilares.",
		"Mayor comodidad y bienestar frente a otro tipo de prótesis."
	]
}];

// ruta para consumir las imagenes
app.get('/api/v1/carousel/', function(req, res){
	res.status(200).send(images);
})

// ruta para consumir los textos
app.get('/api/v1/text/', function(req, res){
	res.status(200).send(text);
})

//mensaje que informa cuando el servidor está encendido
app.listen(port, ()=>{
	console.log(`Servidor iniciado ${port}`);
})
