import React from 'react';

function About() {
	return (
		<section id="about">
			<div className="row">
				<div className="three columns">
					<img className="profile-pic" src="images/orange.jpg" alt="Farhan Ahmed Profile Pic" />
				</div>
				<div className="eight columns main-col">
					<h1>About Me</h1>
					<p>
						Hello there! I'm Farhan, a graduate student at Stony Brook University 
						studying computer science. Throughout my studies, I was involved in various 
						internships and research labs which exposed me to a wide variety of technologies,
						techniques, and experiences. My current research mainly focuses on machine 
						learning and natural language processing. I continuously aim to gain more skills 
						to further my career as a software developer, data scientist, and researcher.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
