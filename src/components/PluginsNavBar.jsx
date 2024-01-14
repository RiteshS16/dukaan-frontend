import { useState } from 'react'
import React from 'react';
import { BsPlugin } from "react-icons/bs";
import plugins from '../icons/PluginsNavbar.png'

export default function PluginsNavBar()
{
    return(
    <Plugins/>
    );
}

const Plugins=React.memo(()=>{
    return(
        <div className="navbarDiv">
            <div className="imgDiv">
                <img src={plugins} />
            </div>
            <div className='navbarText'>Plugins</div>
        </div>
    );
})