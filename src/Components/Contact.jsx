import React from 'react';

function Contact() {
	return (
		<section id="contact">
			<div className="section-head center">
				<h1>Get in Touch</h1>
			</div>
			<div className="center">
				<p className="email">farhaahmed@cs.stonybrook.edu</p>
			</div>
			<ul className="header-col social-links center">
				<li key="github"><a href="https://github.com/f4str"><i className="fa fa-github"></i></a></li>
				<li key="linkedin"><a href="https://www.linkedin.com/in/f4str/"><i className="fa fa-linkedin"></i></a></li>
			</ul>
		</section>
	);
}

export default Contact;
