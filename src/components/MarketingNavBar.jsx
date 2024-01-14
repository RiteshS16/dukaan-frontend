import { useState } from 'react'
import React from 'react';
import { RxSpeakerLoud } from "react-icons/rx";
import marketing from '../icons/MarketingNavbar.svg'

export default function MarketingNavBar()
{
    return(
        <Marketing/>
    )
}
const Marketing=React.memo(()=>{
    return(
        <div className="navbarDiv">
            <div className="imgDiv">
                <img src={marketing} />
            </div>
            <div className='navbarText'>Marketing</div>
        </div>
    );
})