import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    
    const {name, price, info, features} = pricing;

    return (
        <div className='flex flex-col border bg-red-400 rounded-2xl p-4'>
            {/* card header */}
            <div>
                <h1 className='text-2xl font-bold pb-4'>{name}</h1>
                <button className='btn btn-info'>{price}</button>
            </div>

            {/* card body */}
            <div className='bg-red-300 p-4 rounded-2xl mt-10 flex-1'>
                <h3 className='p-2 text-lg font-medium'>{info}</h3>

                {
                    features.map((feature, index)=> <PricingFeature key={index} feature={feature}></PricingFeature>)
                }

            </div>
            <button className='btn btn-info w-full mt-4'>Subscribe</button>
        </div>
    );
};

export default PricingCard;