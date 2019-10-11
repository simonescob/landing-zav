import React, {Component} from 'react';
import Head from './Head';
import { Link } from "react-router-dom";

import "../css/Thanks.css";
import person from "../img/SONRIA_0149_3 AZULpq.png";

class Thanks extends Component {
	render(){
		return(
			<div>
				<Head/>

				<div className="ThanksBackground">
					
					<div className="text">
						<h1>¡Gracias!</h1>
						<h3>Hemos recibido tu solicitud, <br/> Espera pronto nuestra llamada.</h3>

						<br/>

						<div className="btnlayer">
							{/* <br/> */}
							<Link to="/">Ir al sitio web</Link>	
						</div>

					</div>

					<div className="ImageBack">
						<img className="person" src={person} alt=""/>
					</div>

				</div>

			</div>
		)
	}
}

export default Thanks;