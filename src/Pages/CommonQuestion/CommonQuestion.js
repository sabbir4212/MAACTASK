import React from 'react';
import CustomizedAccordions from '../Accordions/Accordions';
import './CommonQuestion.css';

const CommonQuestion = () => {
    return (
        <div className='common-question'>
            <div className='common-question-banner py-16'>
            <div className='py-5'>
                <p className='text-sm text-white text-center'>Common Question</p>
                <h1 className='text-2xl font-bold text-white mt-5 mb-8 text-center'>Frequently asked questions</h1>
                <CustomizedAccordions></CustomizedAccordions>
            </div>
            </div>
        </div>
    );
};

export default CommonQuestion;