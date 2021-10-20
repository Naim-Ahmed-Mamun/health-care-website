import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationArrow, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ContactUs.css';
import contactImg from '../../img/contact_img.svg';

const ContactUs = () => {
	// contact data
	const contactData = [
		{
			id: 1,
			icon: <FontAwesomeIcon icon={faPhoneAlt} />,
			contactTextHeading: '+00 123 456 789',
			contactTextParagraph: 'Call Today'
		},
		{
			id: 2,
			icon: <FontAwesomeIcon icon={faEnvelope} />,
			contactTextHeading: 'info@gmail.com',
			contactTextParagraph: 'Feel free to mail us'
		},
		{
			id: 3,
			icon: <FontAwesomeIcon icon={faLocationArrow} />,
			contactTextHeading: '14 Street Brooklyn NY',
			contactTextParagraph: 'Find Our Location'
		}
	]
	return (
		<>
			<section className="contact_us">
				<div className="container">
					<div className="sec_title" data-aos="fade-up">
						<p>Let Us Help You</p>
						<h2>Have Queries Before The Appointment?</h2>
					</div>
					<div className="row mt-5 align-items-center pt-5" data-aos="fade-up">

						{
							contactData.map(contactItem => {
								return (
									<div key={contactItem.id} className="col-lg-4 col-md-4">
										<div className="contact_item d-flex">
											<i>{contactItem.icon}</i>
											<div>
												<h3>{contactItem.contactTextHeading}</h3>
												<p>{contactItem.contactTextParagraph}</p>
											</div>
										</div>
									</div>
								)
							})
						}

					</div>
					<div className="row mt-5 align-items-center">
						<div className="col-lg-6 col-md-7" data-aos="fade-up">
							<form className="contact_form">
								<div className="mb-4">
									<input className="input" type="text" placeholder="Name" required />
								</div>
								<div className="mb-4">
									<input className="input" type="email" placeholder="Email" required />
								</div>
								<div className="mb-4">
									<input className="input" type="text" placeholder="Phone No" required />
								</div>
								<div>
									<textarea name="" id="" rows="10" placeholder="Message"></textarea>
								</div>
								<div className="submit_btn text-center mt-3">
									<input className="regular_btn" type="submit" value="Send Message" />
								</div>
							</form>
						</div>
						<div className="col-lg-6 col-md-5" data-aos="fade-up">
							<div className="contact_img text-center">
								<img src={contactImg} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactUs;