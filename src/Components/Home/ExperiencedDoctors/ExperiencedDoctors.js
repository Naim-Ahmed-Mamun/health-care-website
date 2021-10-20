import React from 'react';
import './ExperiencedDoctors.css';
import doctor_1 from '../../../img/doctor_1.jpg';
import doctor_2 from '../../../img/doctor_2.jpg';
import doctor_3 from '../../../img/doctor_3.jpg';
import doctor_4 from '../../../img/doctor_4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ExperiencedDoctors = () => {
	const doctorsData = [
		{
			id: 1,
			imgUrl: doctor_1,
			name: 'DR. WILLIAM SMITH',
			title: 'CEO/ Founder',
			fbIcon: <a href="/"> <FontAwesomeIcon icon={faFacebookF} /> </a>,
			linkedinIcon: <a href="/"> <FontAwesomeIcon icon={faLinkedin} /> </a>,
			twitterIcon: <a href="/"> <FontAwesomeIcon icon={faTwitter} /> </a>
		},
		{
			id: 2,
			imgUrl: doctor_2,
			name: 'DR. NOREAIN WALTAR',
			title: 'Pediatrician',
			fbIcon: <a href="/"> <FontAwesomeIcon icon={faFacebookF} /> </a>,
			linkedinIcon: <a href="/"> <FontAwesomeIcon icon={faLinkedin} /> </a>,
			twitterIcon: <a href="/"> <FontAwesomeIcon icon={faTwitter} /> </a>
		},
		{
			id: 3,
			imgUrl: doctor_3,
			name: 'DR. JESSICA BROWN',
			title: 'Laboratory',
			fbIcon: <a href="/"> <FontAwesomeIcon icon={faFacebookF} /> </a>,
			linkedinIcon: <a href="/"> <FontAwesomeIcon icon={faLinkedin} /> </a>,
			twitterIcon: <a href="/"> <FontAwesomeIcon icon={faTwitter} /> </a>,
		},
		{
			id: 4,
			imgUrl: doctor_4,
			name: 'JOHN DOE',
			title: 'Emergency Physician',
			fbIcon: <a href="/"> <FontAwesomeIcon icon={faFacebookF} /> </a>,
			linkedinIcon: <a href="/"> <FontAwesomeIcon icon={faLinkedin} /> </a>,
			twitterIcon: <a href="/"> <FontAwesomeIcon icon={faTwitter} /> </a>
		},
	]
	return (
		<>
			<section className="experience_doctors" data-aos="fade-up">
				<div className="container">
					<div className="sec_title">
						<h2>Experienced Doctors</h2>
					</div>
					<div className="row mt-5 pt-5">
						{
							doctorsData.map(doctor => {
								return (
									<div key={doctor.id} className="col-lg-3 col-md-6">
										<div className="doctor_details mb-3">
											<img src={doctor.imgUrl} alt="" />
											<div className="social_link">
												<ul className="d-flex">
													<li><i>{doctor.fbIcon}</i></li>
													<li><i>{doctor.linkedinIcon}</i></li>
													<li><i>{doctor.twitterIcon}</i></li>
												</ul>
											</div>
										</div>
										<div className="doctor_info text-center">
											<h3>{doctor.name}</h3>
											<p>{doctor.title}</p>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</section>
		</>
	);
};

export default ExperiencedDoctors;