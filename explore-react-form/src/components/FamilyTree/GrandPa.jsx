import React from 'react';
import Uncle from './Uncle';
import Dad from './Dad';
import Mom from './Mom';
import Aunt from './Aunt';
const GrandPa = () => {
    return (
        <div>
            <h3>GrandPa</h3>
            <section className='flex'>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default GrandPa;