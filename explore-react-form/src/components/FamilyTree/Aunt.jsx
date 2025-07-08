import React from 'react';
import Cousin2 from './Cousin2';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin2 name='Nilima'></Cousin2>
                <Cousin2 name='Nil'></Cousin2>
            </section>
        </div>
    );
};

export default Aunt;