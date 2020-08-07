import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './Home';
import More from './More';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<div>
						<Navbar />
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/More" component={More} />	
						</Switch>
						
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
