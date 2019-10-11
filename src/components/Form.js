import React, { Component } from 'react';
import axios from 'axios';

const API_PATH = "http://localhost/lading-zav/action.php";

class Form extends Component {
	state = {
		name: '',
		email: '',
		number: '',
	}

	handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);

		axios({
			method: 'post',
			url: `${API_PATH}`,
			headers: { 'content-type': 'application/json' },
			data: this.state
		})
			.then(result => {
				alert("listoooo")
				// this.setState({
				// 	mailSent: result.data.sent
				// })
			})
			.catch(error => this.setState({ error: error.message }));

	}

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

			<form onSubmit={this.handleSubmit}>
			
			<div id="TextInForm">Solicita tu COTIZACIÓN GRATIS!</div>

			<p id="TextInFormHelp">Campos obligatorios:<span>*</span></p>

			<label>Nombre completo:<span>*</span></label>
			<input type="text" id="name" name="name" 
			placeholder="Tu nombre" 
			required minLength="8" 
			onChange={this.handleInputChange}/>


			<label>Correo:<span>*</span></label>
			<input type="email" 
			id="email" 
			name="email" 
			placeholder="tu correo" 
			minLength="8" required 
			onChange={this.handleInputChange} />

			<label htmlFor="number">Número de teléfono:<span>*</span>	</label>
			<input type="number" 
			name="phone" 
			id="number" 
			placeholder="número de teléfonos" 
			minLength="8" 
			onChange={this.handleInputChange}/>

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