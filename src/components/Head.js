// importando react.js
import React, { Component } from 'react';

//assets adicionales
import logo from "../img/Grupo\ 279.svg"

// Funcion para mostrar el logo
function Head(params) {
	return(
		<div className="head">
			<img src={logo} alt=""/>
		</div>
	);
}

export default Head;