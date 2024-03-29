import React from 'react';

function Projects() {
	return (
		<section id="projects">
			<div className="row">
				<h1 className="title">Check Out Some of My Work</h1>
				<div className="row twelve columns collapsed">
					<div id="projects-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
						<div key="ML Algorithms" className="columns projects-item">
							<div className="item-wrap">
								<a href='https://github.com/f4str/ml-algorithms' title="ML Algorithms" target="_blank" rel="noopener noreferrer">
									<img alt="ML Algorithms" src="images/github.svg" />
									<div className="overlay">
										<div className="projects-item-meta">
											<h5>ML Algorithms</h5>
											<p>Implementations of commonly-used machine learning algorithms from scratch</p>
										</div>
									</div>
									{/* <div className="link-icon"><i className="fa fa-link"></i></div> */}
								</a>
							</div>
						</div>

						<div key="Neetspeak" className="columns projects-item">
							<div className="item-wrap">
								<a href='https://github.com/f4str/neetspeak' title="Neetspeak" target="_blank" rel="noopener noreferrer">
									<img alt="Neetspeak" src="images/github.svg" />
									<div className="overlay">
										<div className="projects-item-meta">
											<h5>Neetspeak</h5>
											<p>A mathematical pseudocode-based programming language</p>
										</div>
									</div>
									{/* <div className="link-icon"><i className="fa fa-link"></i></div> */}
								</a>
							</div>
						</div>

						<div key="Sauce Searcher" className="columns projects-item">
							<div className="item-wrap">
								<a href='https://github.com/f4str/sauce-searcher' title="Sauce Searcher" target="_blank" rel="noopener noreferrer">
									<img alt="Sauce Searcher" src="images/github.svg" />
									<div className="overlay">
										<div className="projects-item-meta">
											<h5>Sauce Searcher</h5>
											<p>A fullstack application used to search and get information for anime</p>
										</div>
									</div>
									{/* <div className="link-icon"><i className="fa fa-link"></i></div> */}
								</a>
							</div>
						</div>
						
						<div key="Anime Info Displayer" className="columns projects-item">
							<div className="item-wrap">
								<a href='https://github.com/f4str/anime-info-displayer' title="Anime Info Displayer" target="_blank" rel="noopener noreferrer">
									<img alt="Anime Info Displayer" src="images/github.svg" />
									<div className="overlay">
										<div className="projects-item-meta">
											<h5>Anime Info Displayer</h5>
											<p>Display condensed anime information and watch orders</p>
										</div>
									</div>
									{/* <div className="link-icon"><i className="fa fa-link"></i></div> */}
								</a>
							</div>
						</div>
						
						<div key="Conversation Starter Generator" className="columns projects-item">
							<div className="item-wrap">
								<a href='https://github.com/f4str/conversation-starter-generator' title="Conversation Starter Generator" target="_blank" rel="noopener noreferrer">
									<img alt="Conversation Starter Generator" src="images/github.svg" />
									<div className="overlay">
										<div className="projects-item-meta">
											<h5>Conversation Starter Generator</h5>
											<p>An Android application that generate random conversation starters</p>
										</div>
									</div>
									{/* <div className="link-icon"><i className="fa fa-link"></i></div> */}
								</a>
							</div>
						</div>
						
						<div key="MNIST Classifier" className="columns projects-item">
							<div className="item-wrap">
								<a href='https://github.com/f4str/mnist-classifier' title="MNIST Classifier" target="_blank" rel="noopener noreferrer">
									<img alt="Neural Networks Sandbox" src="images/github.svg" />
									<div className="overlay">
										<div className="projects-item-meta">
											<h5>MNIST Classifier</h5>
											<p>A simple library for training neural networks on digit recognition tasks</p>
										</div>
									</div>
									{/* <div className="link-icon"><i className="fa fa-link"></i></div> */}
								</a>
							</div>
						</div>
						
						<div key="Numerical Methods Toolkit" className="columns projects-item">
							<div className="item-wrap">
								<a href='https://github.com/f4str/numerical-methods-toolkit' title="Numerical Methods Toolkit" target="_blank" rel="noopener noreferrer">
									<img alt="Numerical Methods Toolkit" src="images/github.svg" />
									<div className="overlay">
										<div className="projects-item-meta">
											<h5>Numerical Methods Toolkit</h5>
											<p>Library of various mathematical algorithms used in numerical analysis</p>
										</div>
									</div>
									{/* <div className="link-icon"><i className="fa fa-link"></i></div> */}
								</a>
							</div>
						</div>
						
						<div key="Battleship Game" className="columns projects-item">
							<div className="item-wrap">
								<a href='https://github.com/f4str/battleship-game' title="Battleship Game" target="_blank" rel="noopener noreferrer">
									<img alt="Battleship Game" src="images/github.svg" />
									<div className="overlay">
										<div className="projects-item-meta">
											<h5>Battleship Game</h5>
											<p>Play a game of Battleship against an AI</p>
										</div>
									</div>
									{/* <div className="link-icon"><i className="fa fa-link"></i></div> */}
								</a>
							</div>
						</div>
					</div>
					
					<div id="projects-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
						
					</div>
					
					<div id="projects-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
						
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
