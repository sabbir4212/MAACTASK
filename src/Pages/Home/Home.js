import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import CommonQuestion from '../CommonQuestion/CommonQuestion';
import Footer from '../Footer/Footer';
import ProductFeatures from '../ProductFeatures/ProductFeatures';
import Teams from '../Teams/Teams';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CommonQuestion></CommonQuestion>
            <ProductFeatures></ProductFeatures>
            <AboutUs></AboutUs>
            <Teams></Teams>
            <Footer></Footer>
        </div>
    );
};

export default Home;