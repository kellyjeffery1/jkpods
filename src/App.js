import React, { Component } from 'react';
import Home from './Home';
import More from './More';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<div>
						<Switch>
							<Route path="/" component={Home} />
							<Route path="/More" component={More} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
