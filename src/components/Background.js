import React from 'react';

function Background(props){ 
	return ( 
	<div className="background">

		<React.Fragment>
			<div className="layer">
				{props.children}
			</div>
		</React.Fragment>

	</div>
	);
}
 
export default Background;