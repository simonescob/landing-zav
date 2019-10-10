import React, { Component } from 'react';

import axios from "axios";

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

		axios.get("http://localhost:4545/api/v1/text/")
		.then((res)=>{
			let result = [res.data]
			console.log(result);
		})
		.catch(console.log)

	}
	
	render() { 
		return ( 
		<div className="carousel">
			{/* <p>
			{this.state.elements.map((item, key) => {
				return(
					<div key={key}>
						<div id="ImageTopText">{item.title}</div>
						<img src={item.image} alt={item.link.title}/>
						<div id="ImageBottomText">{item.link.title}</div>
					</div>
				)
			})}
			</p> */}

		</div>
		);
	}
}
 
export default Carousel;