import React from 'react';
import Myself from './Myself';
import Sister from './Sister';
import Brother from './Brother';
import Mom from './Mom';
import './FamilyTree.css';

const Dad = () => {
    return (

        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <Mom></Mom>
                <Myself></Myself>
                <Sister></Sister>
                <Brother></Brother>
            </section>


        </div>
    );
};

export default Dad;