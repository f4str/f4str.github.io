import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header id="home">
				<nav id="nav-wrap">
					<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
					<a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

					<ul id="nav" className="nav">
						<li className="current"><a className="smoothscroll" href="#home">Home</a></li>
						<li><a className="smoothscroll" href="#about">About</a></li>
						<li><a className="smoothscroll" href="#resume">Resume</a></li>
						<li><a className="smoothscroll" href="#skills">Skills</a></li>
						<li><a className="smoothscroll" href="#projects">Projects</a></li>
						<li><a className="smoothscroll" href="#contact">Contact</a></li>
					</ul>
				</nav>

				<div className="row banner">
					<div className="banner-text">
						<h1 className="responsive-headline">Farhan Ahmed</h1>
						<h3>Undergraduate Student, Computer Science</h3>
						<h3>Stony Brook University</h3>
						<hr />
						<ul className="social">
							<li key="github"><a href="https://github.com/f4str"><i className="fa fa-github"></i></a></li>
							<li key="linkedin"><a href="https://www.linkedin.com/in/f4str/"><i className="fa fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>

				<p className="scrolldown">
					<a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
				</p>
			</header>
		);
	}
}

export default Header;
