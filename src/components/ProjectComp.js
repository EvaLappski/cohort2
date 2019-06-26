import React from "react";
import '.././App.css';


class ProjectComp extends React.Component {
	constructor(){
		super();	
		this.state = {
			json : [],
		}
	}

componentDidMount(){
		console.log('Did Mount Test')
		return fetch('http://localhost:5000/student/')
        .then(result => result.json())
        .then(json => this.setState ({json: json}))
        .catch((err => console.log('err', err)))
	
}	


	render(){

		console.log("test", this.state.json)
		let files = this.state.json

		let list = files.map((a, b) => {
			
			return (
				<tr className= "list" key={b}>
					<td>{a.Project}</td>
					<td>{a.Competency}</td>
				</tr>
			)
		})	

		
			
		

		return (
			<div>
				<h2>HELLO WORLD</h2>
				<table id= 'table' align="center">
					<tbody>
						<tr align='left'>{list}</tr>
					</tbody>
				</table>
			</div>
		)
			
			
	}
}

export default ProjectComp