import { useState } from 'react'
import React from 'react';
import { MdDeliveryDining } from "react-icons/md";
import delivery from '../icons/DeliveryNavbar.svg'

export default function DeliveryNavBar()
{
    return(
        <Delivery/>
    );
}
const Delivery=React.memo(()=>{
    return(
        <div className="navbarDiv">
            <div className="imgDiv">
                <img src={delivery} />
            </div>
            <div className='navbarText'>Delivery</div>
        </div>
    );
})