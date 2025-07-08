import React, { createContext, useState } from 'react';
import GrandPa from './GrandPa';
import './FamilyTree.css';

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);
const FamilyTree = () => {
    const [money, setMoney] = useState(0)

    const asset = 'diamond';
    const newAsset = 'gold';
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h3>Total family money: {money}</h3>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <GrandPa asset={asset}></GrandPa>
                </AssetContext.Provider>
            </MoneyContext>  
        </div>
    );
};

export default FamilyTree;