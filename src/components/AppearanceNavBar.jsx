import { useState } from 'react'
import React from 'react';
import { FaEye } from "react-icons/fa";

import appearance from '../icons/AppearanceNavbar.png'

export default function AppearanceNavBar()
{
    return(
        <Appearance/>
    );
}

const Appearance=React.memo(()=>{
    return(
        <div className="navbarDiv">
            <div className="imgDiv">
                <img src={appearance} />
            </div>
            <div className='navbarText'>Appearance</div>
        </div>
    );
})