import React from 'react';

function Publications() {
	return (
		<section id="publications">
			<div className="row skill">
				<div className="section-head center">
				</div>
				<div className="title center">
					<h1>Publications</h1>
				</div>
				<div className="main">
					<div key="correcting">
						<div className="paper">
							Correcting Sociodemographic Selection Biases for Population Prediction from Social Media.
						</div>
						<div className='authors'>
							Salvatore Giorgi, Veronica Lynn, Keshav Gupta, <span className='me'>Farhan Ahmed</span>, 
							Sandra Matz, Lyle Ungar, and H. Andrew Schwartz. International Conference on Web and 
							Social Media (ICWSM) 2022.
						</div>
					</div>
					<div key="human-centered">
						<div className="paper">
							A Human-Centered Hierarchical Framework for Dialogue System Construction and Evaluation.
						</div>
						<div className='authors'>
							Salvatore Giorgi, <span className='me'>Farhan Ahmed</span>, Lyle Ungar, and H. Andrew Schwartz.
							The Tenth Dialog System Technology Challenge at AAAI (DSTC10) 2022.
						</div>
					</div>
					<div key="optimized">
						<div className="paper">
							Optimized Neural Post-stratification for Twitter-based County Health Estimation
						</div>
						<div className='authors'>
							<span className='me'>Farhan Ahmed</span>, Salvatore Giorgi, Lyle Ungar, and H. Andrew Schwartz.
							International Conference on Web and Social Media (ICWSM) 2022. [Under review]
						</div>
					</div>
					<div key="ares">
						<div className="paper">
							Ares: A System-Oriented Wargame Framework for Adversarial ML
						</div>
						<div className='authors'>
							<span className='me'>Farhan Ahmed</span>, Pratik Vaishnavi, Kevin Ekyholt, and Amir Rahmati. 
							The Fifth Deep Learning and Security Workshop at IEEE (DLS) 2022. [Under review]
						</div>
					</div>
					<div key="robust">
						<div className="paper">
							Robust Image Classification using Edge Features
						</div>
						<div className='authors'>
							Pratik Vaishnavi, <span className='me'>Farhan Ahmed</span>, Veena Krish, Kevin Ekyholt, and Amir Rahmati. 
							ACM ASIA Conference on Computer and Communications Security (AsiaCCS) 2022. [Under review]
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Publications;
