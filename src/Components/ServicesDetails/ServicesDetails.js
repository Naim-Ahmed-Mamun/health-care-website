import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import './ServicesDetails.css';

const ServicesDetails = () => {
    const { name } = useParams();
    const [serviceItem] = useServices();
    const [selectedItem, setSelectedItem] = useState({})
    // console.log(name);
    useEffect(() => {
        const matched = serviceItem.find(item => item.name === name);
        setSelectedItem(matched)
    }, [serviceItem, name]);

    console.log(selectedItem);

    return (
        <section className="services_details">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="service_text">
                            <h2>{selectedItem?.name}</h2>
                            <p>{selectedItem?.desc}</p>
                            <Link to="/services">
                                <button className="regular_btn">See All Services</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="service_img text-center">
                            <img src={selectedItem?.imgUrl} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesDetails;