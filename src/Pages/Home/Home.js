import React from 'react';
import CommonQuestion from '../CommonQuestion/CommonQuestion';
import Footer from '../Footer/Footer';
import ProductFeatures from '../ProductFeatures/ProductFeatures';
import Teams from '../Teams/Teams';
import './Home.css';

const Home = () => {
    return (
        <div>
            <CommonQuestion></CommonQuestion>
            <ProductFeatures></ProductFeatures>
            <Teams></Teams>
            <Footer></Footer>
        </div>
    );
};

export default Home;