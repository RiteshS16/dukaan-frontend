import { useState } from 'react'
import React from 'react';

import audience from '../icons/AudienceNavbar.svg'

export default function AudienceNavBar()
{
    return(
        <Audience/>
    );
}

const Audience=React.memo(()=>{
    return(
        <div className="navbarDiv">
            <div className="imgDiv">
                <img src={audience} />
            </div>
            <div className='navbarText'>Audience</div>
        </div>
    );
})