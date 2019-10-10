"use strict";

const express = require("express");
const bodyparser = require("body-parser");
const app = express();

let port = 4545;

app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

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

app.get('/api/v1/carousel/', function(req, res){
	res.status(200).send(images);
})

app.get('/api/v1/text/', function(req, res){
	res.status(200).send(text);
})

app.listen(port, ()=>{
	console.log(`Servidor iniciado ${port}`);
})