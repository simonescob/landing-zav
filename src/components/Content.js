import React, { Component } from 'react';
import axios from "axios";
import img from '../img/Trazado compuesto.svg';

class Content extends Component {
	state = { 
		elements: [] 
	}
	
	componentDidMount(){

		axios.get("http://localhost:4545/api/v1/text/")
		.then((res)=>{
			let result = res.data
			this.setState({
				elements: result
			})
		})
		.catch(console.log);

	}

	render() { 
		return ( 
			<div className="content">

				{/* <div className="content-img"></div> */}
				<img className="content-img" src={img}/>

				<div className="ContentBox">
				{this.state.elements.map((items, key) => <div key={key}>
					<h1 className="ContentTitle" >{items.title}</h1>
					<ul>
					{items.items.map((text, key) => {
						return <li key={key}>
							<span className="icon-check"></span>{text}
						</li>
					})}
					</ul>
				</div>)}
				</div>

			</div>
		);
	}
}
 
export default Content;