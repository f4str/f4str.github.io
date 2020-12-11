import React from 'react';

function Skills() {
	return (
		<section id="skills">
			<div className="row skill">
				<div className="header-col center">
					<h1><span>My Favorite Toolkits</span></h1>
				</div>
				<div>
					<ul className="bgrid-thirds s-bgrid-thirds cf">
						<div key="Python" className="columns feature-item">
							<h2>Python</h2>
							<img className='skill' alt="Python" src='images/python.png' />
						</div>
						<div key="PyTorch" className="columns feature-item">
							<h2>PyTorch</h2>
							<img className='skill' alt="PyTorch" src='images/pytorch.png' />
						</div>
						<div key="TensorFlow" className="columns feature-item">
							<h2>TensorFlow</h2>
							<img className='skill' alt="TensorFlow" src='images/tensorflow.png' />
						</div>
						<div key="C" className="columns feature-item">
							<h2>C</h2>
							<img className='skill' alt="C" src='images/c.png' />
						</div>
						<div key="Vim" className="columns feature-item">
							<h2>Vim</h2>
							<img className='skill' alt="Vim" src='images/vim.png' />
						</div>
						<div key="CSS" className="columns feature-item">
							<h2>Linux</h2>
							<img className='skill' alt="Linux" src='images/linux.png' />
						</div>
						<div key="CSharp" className="columns feature-item">
							<h2>C&#35;</h2>
							<img className='skill' alt="CSharp" src='images/csharp.png' />
						</div>
						<div key="JavaScript" className="columns feature-item">
							<h2>JavaScript</h2>
							<img className='skill' alt="JavaScript" src='images/javascript.png' />
						</div>
						<div key="Git" className="columns feature-item">
							<h2>Git</h2>
							<img className='skill' alt="Git" src='images/git.png' />
						</div>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Skills;
