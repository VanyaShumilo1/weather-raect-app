import React from 'react';
import Navbar from "../Navbar/Navbar";
import {Helmet} from "react-helmet";
import icon from '../../img/logo.png'

const MainContainer = ({children, keywords, title}) => {
    return (
        <>
            <div className='container'>
                <header>
                    <Helmet
                    title='Weather'
                    link={[{"rel": "icon", "href": icon}]}
                    />
                    <Navbar/>
                </header>
                {children}
            </div>
        </>
    );
};

export default MainContainer;