import React, { Component } from 'react';

class Resume extends Component {
	render() {
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
								<span className="gpa">GPA: 3.94/4.0</span>
							</div>
							<p className="info">
								Computer Science Honors Program
							</p>
						</div>
					</div>
				</div>
				
				<div className="row work">
					<div className="three columns header-col">
						<h1><span>Experience</span></h1>
					</div>
					<div className="nine columns main-col">
						<div key="Stony Brook University">
							<h2 className="company">Stony Brook University</h2>
							<h3 className="role">Software Engineer Intern</h3>
							<p className="date">September 2018 - Present</p>
							<p className="newline description">
								Web application development for the Application Support for Administration Department 
								for designing new software for the university administration and maintaining current 
								software. Used the .NET framework with C# and the Angular framework with TypeScript for 
								full stack development. Created shell scripts to automatically build and deploy software 
								into production using Octopus Deploy.
							</p>
						</div>
						<div key="Peleton Interactive">
							<h2 className="company">Peleton Interactive</h2>
							<h3 className="role">Research Intern</h3>
							<p className="date">June 2019 - August 2019</p>
							<p className="newline description">
								Research project involving a recurrent neural network for the Data Analytics Team to parse 
								articles, blogs, and social media to determine areas of satisfaction and dissatisfaction 
								with Peloton products. Used the PyTorch framework for Python to train deep learning models 
								with text classification algorithms and identify patterns within established groupings. 
								Implemented the ability to automatically record data and create various graphs used for 
								data analysis.
							</p>
						</div>
						<div key="Jefferson Lab">
							<h2 className="company">Jefferson Lab</h2>
							<h3 className="role">Research Assistant</h3>
							<p className="date">January 2018 - August 2018</p>
							<p className="newline description">
								Research project involving a simulation program for launching charged particles at various 
								dense materials. Used the Root framework for C++ to implement automatically recording 
								launch data and generating histograms to show particle distributions and other statistics. 
								Extended the simulation by implementing the ability to vary the particle launch angle in 
								higher dimensions.
							</p>
						</div>
						<div key="Bloomberg Engineering">
							<h2 className="company">Bloomberg Engineering</h2>
							<h3 className="role">Software Engineer Intern</h3>
							<p className="date">July 2017 - August 2017</p>
							<p className="newline description">
								Designed a developer dashboard for the Financial Analytics Department to display failed 
								builds and errors on the Bloomberg Jenkins server and pending pull-request for Bloomberg 
								GitHub. Used the Sinatra framework for Ruby to create a graphical user interface to display 
								information as widgets. Created an Ansible script to install and locally host the dashboard 
								on any computer as a virtual machine.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Resume;
