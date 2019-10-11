// importanto react
import React, { Component } from 'react';

// "axios" que funciona para traducir los json en react
import axios from "axios";

// Usando bootstrap para hacer el Carousel
// import 'bootstrap/dist/css/bootstrap.min.css';

import Slider from "./Slider";

// La clase Carousel
class Carousel extends Component {
	state = {
		elements: []
	}

	componentDidMount(){

		axios.get("http://localhost:4545/api/v1/carousel/")
		.then((res)=>{
			let result = [res.data]
			this.setState({
				elements: result
			})
			console.log(this.state.elements)
		})
		.catch(console.log)

	}
	
	render() { 
		return ( 
		<div className="carousel">

			<div>
				{this.state.elements.map((items, key) => <div>
						<Slider
							Items={items}
						/>
					</div>
				)}
			</div>

			<div className="ImagesBottom">
				<img src={"../img/Enmascarar grupo 7.png"} alt=""/>
			</div>

		</div>
		);
	}
}
 
export default Carousel;