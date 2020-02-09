import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

class App extends Component {
	
	constructor(props){
		super(props);
		ReactGA.initialize('UA-110570651-1');
		ReactGA.pageview(window.location.pathname);
	}
	
	componentDidMount(){
		const load = document.getElementById('siteLoading');
		this.setState();
		setTimeout(()=>{ 
			load.outerHTML=''; 
		}, 500);
	}
	
	render() {
		return (
			<div className="App">
				<Header />
				<About />
				<Resume />
				<Skills />
				<Projects />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default App;
