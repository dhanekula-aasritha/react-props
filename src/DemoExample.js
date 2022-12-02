import React from 'react'
class DemoExample extends React.Component{
	demo={
		d:this.props.name,
		s:this.props.year
	}
  render(){
  	return(
  		<div>
  			<p>{this.demo.d} {this.demo.s} </p>
  			<h1>{this.props.name}</h1>
  			<p>{this.props.year}</p>
		</div>
  		)
  }
}
export default DemoExample