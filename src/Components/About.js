import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<section id="about">
				<div className="row">
					<div className="three columns">
						<img className="profile-pic" src="images/orange.jpg" alt="Farhan Ahmed Profile Pic" />
					</div>
					<div className="eight columns main-col">
						<h1>About Me</h1>
						<p>
							Hello there! I'm Farhan Ahmed, an undergraduate student at Stony Brook University 
							studying Computer Science and Applied Mathematics. Throughout my undergraduate 
							studies, I was involved in various internships and research labs which exposed me 
							to a wide variety of technologies, techniques, and experiences. While developing 
							software at Bloomberg, I became acquainted with software engineering and the 
							development cycle. From creating simulations at Jefferson Lab, I became skilled 
							at data analytics and running experiments. I enjoy learning new things and gaining 
							new experiences. I am particularly interested in Machine Learning and Natural 
							Language Processing which are my main research topics. I continuously aim to gain 
							more skills to further my career as a student, software engineer, and researcher.
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
