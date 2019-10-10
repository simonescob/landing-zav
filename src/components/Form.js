import React, { Component } from 'react';

class Form extends Component {
	// state = {  }
	render() { 
		return (
		<div className="form">
			<div className="layeranun">
				<div className="anuncio">Implantes Dentales</div>
				<div>desde</div>
				<div className="signal">$</div>
				<div id="price"></div>
				<div className="anuncio">diarios</div>
				<div className="">*Aplican <a href="#">Términos y Condiciones</a></div>
			</div>

			<form action="/action_page.php">
			
			<div id="TextInForm">Solicita tu COTIZACIÓN GRATIS!</div>

			<p id="TextInFormHelp">Campos obligatorios:<span>*</span></p>

			<label>Nombre completo:<span>*</span></label>
			<input type="text" id="fname" name="firstname" 
			placeholder="Tu nombre" 
			required minLength="8" />


			<label>Correo:<span>*</span></label>
			<input type="email" id="email" name="email" placeholder="tu correo" required />

			<label htmlFor="number">Número de teléfono:<span>*</span>	</label>
			<input type="number" name="number" id="number" placeholder="número de teléfonos"/>

			<label htmlFor="checkbox" id="checkboxl">
				<input type="checkbox" name="checkbox" id="checkbox" required/>
				Acepto las <strong><a href="#">  Políticas de Datos Personales y Privacidad</a></strong>. 
				Sujeto a valoración odontológica.
			</label>

			<div className="btnlayer">
				<input type="submit" className="btnSend" value="Solicitar"/>
			</div>
			
			</form>
		</div>
		);
	}
}
 
export default Form;