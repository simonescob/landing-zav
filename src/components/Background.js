import React, { Component } from 'react';

class Background extends Component {
	// state = {  }
	render() { 
		return ( 
		<div className="background">

			{this.props.children}

		</div>
		);
	}
}
 
export default Background;