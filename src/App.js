import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Pods from './components/Pods';
import Footer from './components/Footer';
import More from './More';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
						<Switch>
							<Route path="/More" component={More} />
						</Switch>
					<Header />
					<About />
					<Pods />
					<Footer />	
				</div>
			</Router>
		);
	}
}

export default App;
