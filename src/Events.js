import {Component} from 'react'
class Events extends Component{
	state={
		username:"",password:"",age:""
	}
	handleClick=()=>{
		console.log(this.state.username)
		console.log(this.state.password)
		console.log(this.state.age)
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	render(){
		return(
			<div>
				<input 
			 	name="username"	
				onChange={this.handleChange}
				placeholder="Enter username"/>
				<input
				name="password"
				onChange={this.handleChange}
				placeholder="Enter password"/>
				<input
				name="age"
				onChange={this.handleChange}
				placeholder="age"/>
				<button onClick={this.handleClick}>Submit</button>
				
				</div>
			)
	}
}
export default Events