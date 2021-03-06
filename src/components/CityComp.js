import React from "react";
import City from './city';
import '.././App.css';
import Community from './community'
import CityDetails from './CityDetails'


class CityComp extends React.Component {
	constructor(){
		super();

		this.state = {
			communityController : new Community (),
			displayDetails: false,
			whichCity: '',
		}

		this.state.communityController.createCity('Edmonton', 100, 99, 9000)
		this.state.communityController.createCity('Calgary', 100, 99, 9000)
		this.state.communityController.createCity('Vancouver', 0, 0, 9000)

	}

	componentDidMount() {
		this.communityController = this.state.communityController
		this.setState({communityController: this.communityController})
	}
	

	createNewCity = () => {	
		let name = document.getElementById('input1').value;
		let lati = document.getElementById('input2').value;
		let long = document.getElementById('input3').value;
		let pop = Number(document.getElementById('input4').value);
		this.communityController.createCity(name, lati, long, pop);
		this.setState({communityController: this.communityController});
	}

	handleChange = (event) =>{
 		const {name,value} = event.target;
  		this.setState({[name]:value});
	}

	deleteCity = (cityID) => {
		this.communityController.deleteCity(cityID);
		this.setState({communityController: this.communityController});
	}

	showDetails = (cityID) => {
		let x = this.communityController.findCityIndex(cityID);//return index
		this.setState({communityController: this.communityController});
		this.setState({whichCity: this.communityController.community[x]});
		console.log(this.state)
		this.setState({displayDetails: true});

	}

	moveOut = (cityID) => {
		let a = this.state.whichCity.cityID;
		let y = Number(document.getElementById('inputOut').value);
		this.communityController.community[a].movedOut(y);
		this.setState({communityController: this.communityController});
	}

	moveIn = (cityID) => {
		let a = this.state.whichCity.cityID;
		let y = Number(document.getElementById('inputIn').value);
		this.communityController.community[a].movedIn(y);
		this.setState({communityController: this.communityController});
	}

	render(){
		
		let list = this.state.communityController.community.map((a, b) => {
			let target = this.state.communityController.community[b];

			return (
				<tr key={b}>
					<td>{target.city}</td>
					<td>{target.latitude}</td>
					<td>{target.longitude}</td>
					<td>{target.population}</td>
					<td><button className= 'button2'onClick={(cityID)=>this.showDetails(target.cityID)} 
					>Edit</button></td>
					<td><button className= 'button2' onClick={(cityID)=>this.deleteCity(target.cityID)}>Delete</button></td>	
				</tr>
			)
		})	

		return (
			<div>
				<h2> CITIES AND COMMUNITY </h2>

					<div className="statsDiv">
				
						<h3>Total Population: {this.state.communityController.getPopulationTotal()} </h3>
						<h3>Most Northern City: {this.state.communityController.getMostNorthern()} </h3>	
						<h3>Most Southern City: {this.state.communityController.getMostSouthern()} </h3>		
					</div>

					<table id= 'table'>
						<tbody>
							<tr>
								<td><input className= 'inputBox' type= 'text' id='input1' placeholder= "Enter Location"/></td>
								<td><input className= 'inputBox' type= 'number' id='input2' placeholder= "Enter Latitude"/></td>
								<td><input className= 'inputBox' type= 'number' id='input3' placeholder= "Enter Longitude"/></td>
								<td><input className= 'inputBox' type= 'number' id='input4' placeholder= "Enter Population"/></td>
								<td><button className='button2' id='button' onClick= {this.createNewCity}>Submit </button></td>
							</tr>
							<tr>
								<th>City</th>
								<th>Latitude</th>
								<th>Longitude</th>
								<th>Population</th>
							</tr>
							{list}
						</tbody>
					</table>
						<br></br>
					

					<div>
						{this.state.displayDetails ? <CityDetails passCity={this.state.whichCity} passCommunity={this.state.communityController} passMoveOut={this.moveOut} passMoveIn={this.moveIn} /> : null}
					</div>
					
					
			</div>
		)	
	}
}


export default CityComp