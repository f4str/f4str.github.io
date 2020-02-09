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
							I am a third year undergraduate student at Stony Brook University, studying Computer Science 
							and Applied Mathematics. My interests in Computer Science are Machine Learning and Natural 
							Language Processing. Throughout high school and my undergraduate studies, I steadily gained 
							experience in both software development and research by taking part in various internships. 
							As a software engineering intern, I became very familiar with various technologies and 
							infrastructures along with the software development cycle. I enjoy full-stack development 
							and working on the full development cycle of an application. However, I love doing research 
							even more than I enjoy software development. I currently aim to become a professor to continue 
							doing research in the fields that interest me. 
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
