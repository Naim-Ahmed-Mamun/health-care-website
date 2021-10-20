import React from 'react';
import './Testimonial.css';
import testimonial_img_1 from '../../../img/testimonial-1.jpg';
import testimonial_img_2 from '../../../img/testimonial-2.jpg';

const Testimonial = () => {

	return (
		<>
			<section className="testimonial">
				<div className="container">
					<div className="sec_title" data-aos="fade-up">
						<h2>What Our Patients Say</h2>
					</div>
					<div className="row mt-5 pt-5">
						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="testimonial_item d-flex" data-aos="fade-up">
								<div className="testimonial_img">
									<img src={testimonial_img_1} alt="" />
								</div>
								<div className="testimonial_text">
									<p>I was welcomed with friendly staff and they were very helpful. The wait was over 1 hour, but three days later I am feeling much better. Thanks my doctor.</p>
									<h5>John doe</h5>
									<span>Heart Patient</span>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="testimonial_item d-flex" data-aos="fade-up">
								<div className="testimonial_img">
									<img src={testimonial_img_2} alt="" />
								</div>
								<div className="testimonial_text">
									<p>It’s true that laughter really is cheap medicine. It’s a prescription anyone can afford. And best of all, you can fill it right now.</p>
									<h5>Maya Smith</h5>
									<span>CEO of Brandy</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Testimonial;