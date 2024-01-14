import { useState } from 'react'
import React from 'react';
import { CiDiscount1 } from "react-icons/ci";
import discounts from '../icons/DiscountsNavbar.svg'

export default function DiscountsNavBar()
{
    return(
        <Discount/>
    )
}
const Discount=React.memo(()=>{
    return(
        <div className="navbarDiv">
            <div className="imgDiv">
                <img src={discounts} />
            </div>
            <div className='navbarText'>Discounts</div>
        </div>

    );
})