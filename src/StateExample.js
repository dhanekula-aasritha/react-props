import React from 'react'
class StateExample extends React.Component{
	state={
		name:"aasritha", 
		year:"2000",
		employees:[
			{id:1,name:"emp1"},
			{id:2,name:"emp2"}
		]
		}
		//employees:["emp1","emp2","emp3"]
	
	render(){
		return(
				<div>
				<h1>this is sarvani</h1>
				<p>{this.state.name} {this.state.year}</p>
				{
					this.state.employees.map((emp)=>(
						<div>
						<p>{emp.id}</p>
 						<p>{emp.name}</p>
 						</div>
						)
						)
				}
				{/*<p>
				    {this.state.employees[0].id} &nbsp;
					{this.state.employees[0].name}
				</p>
				<p>
				    {this.state.employees[1].id} &nbsp;
				    {this.state.employees[1].name}
				</p>*/}
				
				</div>
			)
	}
}
export default StateExample