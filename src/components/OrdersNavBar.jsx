import { useState } from 'react'
import React from 'react';
import { GiNotebook } from "react-icons/gi";
import orders from '../icons/OrdersNavbar.png'

export default function OrdersNavBar()
{
    return <Orders/>
}

const Orders=React.memo(()=>{
    return(
        <div className="navbarDiv">
            <div className="imgDiv">
                <img src={orders} />
            </div>
            <div className='navbarText'>Orders</div>
        </div>
    );
})