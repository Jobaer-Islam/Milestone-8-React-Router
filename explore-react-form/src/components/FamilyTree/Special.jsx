import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = () => {
    const newAsset = useContext(AssetContext);
    console.log('new asset', newAsset);
    return (
        <div>
            <h3>Special</h3>
            
            <p>New Asset: {newAsset}</p>
            
        </div>
    );
};

export default Special;