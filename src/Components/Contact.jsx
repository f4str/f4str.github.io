import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<section id="contact">
				<div className="section-head center">
					<h1>Get in Touch</h1>
				</div>
				<div className="center">
					<p className="phone">917-438-8321</p>
					<p className="email">farhan.ahmed.1@stonybrook.edu</p>
				</div>
				<ul className="header-col social-links center">
					<li key="github"><a href="https://github.com/f4str"><i className="fa fa-github"></i></a></li>
					<li key="linkedin"><a href="https://www.linkedin.com/in/f4str/"><i className="fa fa-linkedin"></i></a></li>
				</ul>
			</section>
		);
	}
}

export default Contact;
