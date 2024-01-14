import { useState } from 'react'
import React from 'react';
import { MdExpandMore } from "react-icons/md";
import nishyan from '../icons/Image.png'
import chevrondown from '../icons/ChevronDown.svg'

export default function ProfileNavBar()
{
    return(
        <Profile/>
    );
}
const Profile=React.memo(()=>{
    return(
        <div style={{width: 192, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
            <div style={{width: 40, height: 40, background: 'white', borderRadius: 4}}>
                <img style={{width: 39, height: 39, borderRadius: 4}} src={nishyan} />
            </div>
            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Nishyan</div>
                <div style={{alignSelf: 'stretch', opacity: 0.80, color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>
                    <a href='' style={{color:'white'}}>Visit store</a>
                </div>
            </div>
            <div className="buttonIcon" style={{width: 20, height: 20, position: 'relative'}}>
                <img src={chevrondown}/>
            </div>
        </div>

    );
})