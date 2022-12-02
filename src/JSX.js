import React from 'react'
function JSX(){
	/*return(
		<div>
			<h1>teddy bear</h1>
		</div>
		)*/
	return React.createElement(
		"div",
		{id:"one",className:"classone"},
		React.createElement("h1",null,"teddy bear")
		)
}
export default JSX