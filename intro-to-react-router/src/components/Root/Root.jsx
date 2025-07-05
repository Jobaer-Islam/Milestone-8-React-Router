import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Home from '../Home/Home';

const Root = () => {
    return (
        <div>
            <Header></Header>
            {/* <Home></Home> */}
        </div>
    );
};

export default Root;