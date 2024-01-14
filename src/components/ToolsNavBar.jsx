import { useState } from 'react'
import React from 'react';

import tools from '../icons/ToolsNavbar.svg'

export default function ToolsNavBar()
{
    return(
        <div className="navbarDiv">
            <div className="imgDiv">
                <img src={tools} />
            </div>
            <div className='navbarText'>Tools</div>
        </div>
    );
}