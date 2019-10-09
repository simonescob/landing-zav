import React, { Component } from 'react';

class Form extends Component {
	// state = {  }
	render() { 
		return (<div>

			<p>Contact Me</p>
			<div>
			<form action="/action_page.php">

			<label>Nombre completo</label>
			<input type="text" id="fname" name="firstname" placeholder="Nombre completo" />


			<label>Email</label>
			<input type="email" id="email" name="email" placeholder="Your email" />


			<label>Número de teléfono</label>
			<input type="number" name="number" id="number"/>

			</form>
			</div>


		</div>);
	}
}
 
export default Form;