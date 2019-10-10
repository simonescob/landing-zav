import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

let Slider = (props) => {
	return(
		<div>
			<Carousel>
				{props.Items.map( element => <Carousel.Item>
						<div id="ImageTopText">
							<h3>{element.title}</h3>
						</div>
						<img
							className="d-block w-100"
							src={element.image}
							alt="First slide"
						/>
						<div id="ImageBottomText">
							{element.link.title}
						</div>
					</Carousel.Item> 
				)}
			</Carousel>
		</div>
	)
}

export default Slider;