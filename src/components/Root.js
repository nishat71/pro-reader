import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet/> 
        </div>
    );
};

export default Root;
//dymanicbabe component change krte pari jar jnno placeholder component lagbe