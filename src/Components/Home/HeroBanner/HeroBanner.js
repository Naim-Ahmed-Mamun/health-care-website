import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner_1 from '../../../img/banner_img_1.svg';
import banner_2 from '../../../img/banner_img_2.svg';
import banner_3 from '../../../img/banner_img_3.svg';
import './HeroBanner.css';

const HeroBanner = () => {
    return (
        <>
            <div className="heroBanner">
                <div className="container">
                    <Carousel>
                        <Carousel.Item>
                            <div className="row align-items-center" data-aos="fade-up">
                                <div className="col-lg-6">
                                    <div className="banner_content">
                                        <h2>Best Medical And Health Care Center</h2>
                                        <p>We at Medico are always fully focused on helping your child and you to overcame any hurdle or any other problem.</p>
                                        <button className="regular_btn">Learn More</button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner_img">
                                         <img src={banner_1} alt="" /> 
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="banner_content">
                                        <h2>We Provide Top Medical Services</h2>
                                        <p>We at Medico are always fully focused on helping your child and you to overcame any hurdle or any other problem.</p>
                                        <button className="regular_btn">Learn More</button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner_img">
                                        <img src={banner_2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="banner_content">
                                        <h2>A Healthy Life Is Within Reach</h2>
                                        <p>We at Medico are always fully focused on helping your child and you to overcame any hurdle or any other problem.</p>
                                        <button className="regular_btn">Learn More</button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner_img">
                                        <img src={banner_3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default HeroBanner;