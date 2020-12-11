import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {
	const load = document.getElementById('siteLoading');
	
	useEffect(() => {
		setTimeout(() => { 
			load.outerHTML=''; 
		}, 500);
	}, []);
	
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
	)
}

export default App;
