import React from 'react';
import doctor from '../../../img/doctor.webp';
import './IntroducingTeam.css';
import signature from '../../../img/signature.png';

const IntroducingTeam = () => {
    return (
        <>
            <section className="team_introducing_sec">
                <div className="container">
                    <div className="row align-items-center introducingTeam_wrapper">
                        <div className="col-lg-5">
                            <div className="doctor_img" data-aos="fade-up">
                                <img src={doctor} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="introducing_team_info" data-aos="fade-up">
                                <h2>Welcome to Medico Health Center</h2>
                                <span>SHORT HISTORY</span>
                                <p>Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue.</p>
                                <img src={signature} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IntroducingTeam;