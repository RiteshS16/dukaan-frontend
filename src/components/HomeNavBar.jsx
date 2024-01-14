import { useState } from 'react'
import React from 'react';
import { GoHome } from "react-icons/go";
import home from '../icons/HomeNavbar.png'

export default function HomeNavBar()
{
    return(
        <Home/>
    )
}
const Home=React.memo(()=>{
    return(
        <div className="navbarDiv">
            <div className="imgDiv">
                <img src={home} />
            </div>
            <div className='navbarText'>Home</div>
        </div>
    );
})