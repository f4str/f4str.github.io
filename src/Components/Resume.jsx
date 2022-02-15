import React from 'react';

function Resume() {
	return (
		<section id="resume">
			<div className="row education">
				<div className="three columns header-col">
					<h1><span>Education</span></h1>
				</div>
				<div className="nine columns main-col">
					<div key="Stony Brook University G">
						<h2 className="school">Stony Brook University | Stony Brook, NY</h2>
						<h3 className="degree">Master of Science in Computer Science</h3>
						<div>
							<span className="date">August 2021 &#8211; May 2022</span>
							<span className="gpa">GPA: 3.91/4.0</span>
						</div>
						<p className="info">
							Accelerated B.S./M.S. Program, Thesis Track
						</p>
					</div>
					<div key="Stony Brook University UG">
						<h2 className="school">Stony Brook University | Stony Brook, NY</h2>
						<h3 className="degree">Bachelor of Science in Computer Science &#38; Applied Mathematics</h3>
						<div>
							<span className="date">August 2017 &#8211; May 2021</span>
							<span className="gpa">GPA: 3.94/4.0</span>
						</div>
						<p className="info">
							Summa Cum Laude, Computer Science Honors Program
						</p>
					</div>
				</div>
			</div>
			
			<div className="row internship">
				<div className="three columns header-col">
					<h1><span>Internships</span></h1>
				</div>
				<div className="nine columns main-col">
					<div key="Kitware">
						<h2 className="company">Kitware | Clifton Park, NY</h2>
						<h3 className="role">Research &#38; Development Intern</h3>
						<p className="date">June 2021 &#8211; August 2021</p>
						<p className="newline description"></p>
					</div>
					<div key="Barclays">
						<h2 className="company">Barclays | New York, NY</h2>
						<h3 className="role">Software Engineer Intern</h3>
						<p className="date">June 2020 &#8211; August 2020</p>
						<p className="newline description"></p>
					</div>
					{/* <div key="Stony Brook University">
						<h2 className="company">Stony Brook University</h2>
						<h3 className="role">Software Engineer Intern</h3>
						<p className="date">September 2018 &#8211; May 2020</p>
						<p className="newline description"></p>
					</div> */}
					<div key="Peleton">
						<h2 className="company">Peloton | New York, NY</h2>
						<h3 className="role">Data Science Intern</h3>
						<p className="date">June 2019 &#8211; August 2019</p>
						<p className="newline description"></p>
					</div>
					<div key="Bloomberg">
						<h2 className="company">Bloomberg | New York, NY</h2>
						<h3 className="role">Software Engineer Intern</h3>
						<p className="date">July 2018 &#8211; August 2018</p>
						<p className="newline description"></p>
					</div>
					<div key="Lighthouse Guild">
						<h2 className="company">Lighthouse Guild | New York, NY</h2>
						<h3 className="role">Software Engineer Intern</h3>
						<p className="date">June 2017 &#8211; August 2017</p>
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
						<h2 className="company">HLAB Lab | Stony Brook, NY</h2>
						<h3 className="role">Research Assistant</h3>
						<p className="date">June 2020 &#8211; Present</p>
						<p className="newline description"></p>
					</div>
					<div key="Jefferson Lab">
						<h2 className="company">Ethos Lab | Stony Brook, NY</h2>
						<h3 className="role">Research Assistant</h3>
						<p className="date">September 2019 &#8211; Present</p>
						<p className="newline description"></p>
					</div>
					<div key="Jefferson Lab">
						<h2 className="company">Jefferson Lab | Stony Brook, NY</h2>
						<h3 className="role">Research Assistant</h3>
						<p className="date">January 2018 &#8211; August 2018</p>
						<p className="newline description"></p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Resume;
