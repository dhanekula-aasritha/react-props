import {useState} from 'react'

function About(){
	const [village,setVillage]=useState("vijayawada");
	const [name,setName]=useState("aasritha")
	return(
		<div>
		<h1>{name}</h1>
		<p>{village}</p>
		<p><input onChange={(e)=>setVillage(e.target.value)} placeholder="Enter your village"/></p>
		<input onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
		<p><button onClick={()=>console.log(village,name)}>Submit</button></p>
		</div>
		)
}
export default About