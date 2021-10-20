import React from 'react';
import './Footer.css';
import footerLogo from '../../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="row" data-aos="zoom-in">
						<div className="col-lg-4 col-md-6">
							<div className="footer_item first">
								<img src={footerLogo} alt="" />
								<p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
								<p>Call: (480) 555-0103</p>
								<div className="social_links">
									<div>
										<a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
									</div>
									<div>
										<a href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
									</div>
									<div>
										<a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div className="footer_item second">
								<div>
									<h3>Explore</h3>
									<ul>
										<li><Link to="/">Home</Link></li>
										<li><Link to="/">About Us</Link></li>
										<li><Link to="/">Services</Link></li>
										<li><Link to="/">Contact</Link></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div className="footer_item third">
								<h3>Legal</h3>
								<ul>
									<li><Link to="/">Privacy policy</Link></li>
									<li><Link to="/">Terms of condition</Link></li>
									<li><Link to="/">Documentation</Link></li>
									<li><Link to="/">Help center</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="footer_item fourth">
								<div>
									<h3>Subscribe</h3>
									<p>Subscribe to get the latest news from us</p>
									<div className="subscribe_field">
										<input type="email" placeholder="Your email" />
										<button className="regular_btn">Submit</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;