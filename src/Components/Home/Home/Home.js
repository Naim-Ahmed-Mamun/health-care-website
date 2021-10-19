import React from 'react';
import Blog from '../Blog/Blog';
import ExperiencedDoctors from '../ExperiencedDoctors/ExperiencedDoctors';
import HeroBanner from '../HeroBanner/HeroBanner';
import IntroducingTeam from '../IntroducingTeam/IntroducingTeam';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <HeroBanner></HeroBanner>
            <IntroducingTeam></IntroducingTeam>
            <Services></Services>
            <Testimonial></Testimonial>
            <ExperiencedDoctors></ExperiencedDoctors>
            <Blog></Blog>
        </>
    );
};

export default Home;