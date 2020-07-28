import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Pods from './components/Pods';


class App extends Component {
	render() {
		return (
            <div>
                <Navbar />
                <Header />
                <About />
                <Pods/>
			</div>
		);
	}
}

export default App;
