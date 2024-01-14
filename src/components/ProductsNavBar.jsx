import { useState } from 'react'
import React from 'react';
import { FiShoppingBag } from "react-icons/fi";
import products from '../icons/ProductsNavbar.png'

export default function ProductsNavBar()
{
    return(
        <Products/>
    )
}
const Products=React.memo(()=>{
    return(
        <div className="navbarDiv">
            <div className="imgDiv">
                <img src={products} />
            </div>
            <div className='navbarText'>Products</div>
        </div>
    );
})