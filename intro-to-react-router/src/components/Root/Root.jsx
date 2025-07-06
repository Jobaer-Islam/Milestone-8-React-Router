import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import "./Root.css";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <SideBar></SideBar>
                <Outlet />
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;