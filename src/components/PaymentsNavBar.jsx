import { useState } from 'react'
import React from 'react';
import { MdOutlinePayments } from "react-icons/md";
import payments from '../icons/PaymentsNavbar.svg'

export default function PaymentsNavBar()
{
    return(
        <Payments/>
    )
}

const Payments=React.memo(()=>{
    return(
        <div className="navbarDiv">
            <div className="imgDiv">
                <img src={payments} />
            </div>
            <div className='navbarText'>Payments</div>
        </div>
    );
})