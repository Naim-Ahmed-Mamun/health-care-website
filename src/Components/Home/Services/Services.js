import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../../Hooks/useServices';
import './Services.css';

const Services = () => {
    const [serviceItem] = useServices();
    console.log(serviceItem);
    return (
        <>
            <section className="services_sec">
                <div className="container">
                    <div className="sec_title">
                        <h2>We Offer Different Services To Improve Your Health</h2>
                    </div>
                    <div className="row mt-5 pt-5">
                        {
                            serviceItem.map(item => {
                                return (
                                    <div key={item.id} className="col-lg-4 mb-4">
                                        <Card className="services_card_item">
                                            <Card.Img variant="top" src={item.imgUrl} />
                                            <Card.Body className="service_text">
                                                <h3>{item.name}</h3>
                                                <p>{item.desc.slice(1, 80)}....</p>
                                                <Link to={`servicesDetails/${item.name}`}>
                                                    <button className="regular_btn">Read More</button>
                                                </Link>
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