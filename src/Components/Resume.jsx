import React from 'react';

function Resume() {
	return (
		<section id="resume">
			<div className="row education">
				<div className="three columns header-col">
					<h1><span>Education</span></h1>
				</div>
				<div className="nine columns main-col">
					<div key="Stony Brook University">
						<h2 className="school">Stony Brook University</h2>
						<h3 className="degree">Bachelors in Computer Science &#38; Applied Mathematics</h3>
						<div>
							<span className="date">Expected May 2021</span>
							<span className="gpa">GPA: 3.95/4.0</span>
						</div>
						<p className="info">
							Computer Science Honors Program
						</p>
					</div>
				</div>
			</div>
			
			<div className="row internship">
				<div className="three columns header-col">
					<h1><span>Internships</span></h1>
				</div>
				<div className="nine columns main-col">
					<div key="Barclays">
						<h2 className="company">Barclays</h2>
						<h3 className="role">Software Engineer Intern</h3>
						<p className="date">June 2020 - August 2020</p>
						<p className="newline description"></p>
					</div>
					<div key="Stony Brook University">
						<h2 className="company">Stony Brook University</h2>
						<h3 className="role">Software Engineer Intern</h3>
						<p className="date">September 2018 - May 2020</p>
						<p className="newline description"></p>
					</div>
					<div key="Peleton">
						<h2 className="company">Peloton</h2>
						<h3 className="role">Data Science Intern</h3>
						<p className="date">June 2019 - August 2019</p>
						<p className="newline description"></p>
					</div>
					<div key="Bloomberg">
						<h2 className="company">Lighthouse Guild</h2>
						<h3 className="role">Software Engineer Intern</h3>
						<p className="date">June 2018 - August 2018</p>
						<p className="newline description"></p>
					</div>
					<div key="Bloomberg">
						<h2 className="company">Bloomberg</h2>
						<h3 className="role">Software Engineer Intern</h3>
						<p className="date">July 2017 - August 2017</p>
						<p className="newline description"></p>
					</div>
				</div>
			</div>
			
			<div className="row research">
				<div className="three columns header-col">
					<h1><span>Research</span></h1>
				</div>
				<div className="nine columns main-col">
					<div key="HLAB Lab">
						<h2 className="company">HLAB Lab</h2>
						<h3 className="role">Research Assistant</h3>
						<p className="date">June 2020 - Present</p>
						<p className="newline description"></p>
					</div>
					<div key="Jefferson Lab">
						<h2 className="company">Ethos Lab</h2>
						<h3 className="role">Research Assistant</h3>
						<p className="date">September 2019 - Present</p>
						<p className="newline description"></p>
					</div>
					<div key="Jefferson Lab">
						<h2 className="company">Jefferson Lab</h2>
						<h3 className="role">Research Assistant</h3>
						<p className="date">January 2018 - August 2018</p>
						<p className="newline description"></p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Resume;
