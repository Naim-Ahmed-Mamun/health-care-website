import React from 'react';
import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useServices from '../../../Hooks/useServices';
import './Services.css';

const Services = () => {
    // services all item
    const [serviceItem] = useServices();
    // console.log(serviceItem);
    return (
        <>
            <section id="services" className="services_sec">
                <div className="container">
                    <div className="sec_title" data-aos="fade-up">
                        <h2>We Offer Different Services To Improve Your Health</h2>
                    </div>
                    <div className="row mt-5 pt-5">
                        {
                            serviceItem.map(item => {
                                return (
                                    <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up">
                                        <Card className="services_card_item">
                                            <div className="services_img">
                                                <Card.Img variant="top" src={item.imgUrl} />
                                            </div>
                                            <Card.Body className="service_text">
                                                <h3>{item.name}</h3>
                                                <p>{item.desc.slice(1, 80)}....</p>
                                                <HashLink to={`servicesDetails/${item.name}`}>
                                                    <button className="regular_btn">See Details</button>
                                                </HashLink>
                                            </Card.Body>
                                        </Card>
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

export default Services;