import { useState } from 'react'
import React from 'react';
import { GiHistogram } from "react-icons/gi";

import analytics from '../icons/AnalyticsNavbar.svg'

export default function AnalyticsNavBar()
{
    return(
        <Analytics/>
    );
}
const Analytics=React.memo(()=>{
    return(
        <div className="navbarDiv">
            <div className="imgDiv">
                <img src={analytics} />
            </div>
            <div className='navbarText'>Analytics</div>
        </div>
    );
})