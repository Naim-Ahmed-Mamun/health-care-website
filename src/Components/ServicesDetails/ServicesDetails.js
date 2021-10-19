import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useServices from '../../Hooks/useServices';
import './ServicesDetails.css';

const ServicesDetails = () => {
    const { name } = useParams();
    // services items
    const [serviceItem] = useServices();
    // find specific service item state
    const [selectedItem, setSelectedItem] = useState({})
    // console.log(name);
    useEffect(() => {
        const matched = serviceItem.find(item => item.name === name);
        setSelectedItem(matched)
    }, [serviceItem, name]);

    // console.log(selectedItem);

    return (
        <section id="services_details">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="service_text">
                            <h2>{selectedItem?.name}</h2>
                            <p>{selectedItem?.desc}</p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="service_img text-center">
                            <img src={selectedItem?.imgUrl} alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5 pt-5">
                    <HashLink to="/home#services">
                        <button className="regular_btn">See All Services</button>
                    </HashLink>
                </div>
            </div>
        </section>
    );
};

export default ServicesDetails;