import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex gap-1 pb-2'><CircleCheckBig></CircleCheckBig>{feature}</p>
    );
};

export default PricingFeature;