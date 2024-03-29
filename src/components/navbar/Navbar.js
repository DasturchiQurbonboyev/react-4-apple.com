
import { React, memo } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FaApple, FaSearch } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";



function Navbar() {
    return (
        <div className='navbar'>

            <Link to={"/"}><FaApple /></Link>
            <Link className='navbar__res' to={"/store"}>Store</Link>
            <Link className='navbar__res' to={"/mac"}>Mac</Link>
            <Link className='navbar__res' to={"/ipad"}>Ipad</Link>
            <Link className='navbar__res' to={"/iphone"}>Iphone</Link>
            <Link className='navbar__res' to={"/watch"}>Watch</Link>
            <Link className='navbar__res' to={"/vision"}>Vision</Link>
            <Link className='navbar__res' to={"/vision"}>AirPods</Link>
            <Link className='navbar__res' to={"/vision"}>Tv & Home</Link>
            <Link className='navbar__res' to={"/vision"}>Entertainment</Link>
            <Link className='navbar__res' to={"/vision"}>Accessories</Link>
            <Link className='navbar__res' to={"/vision"}>Support</Link>

            <div className='navbar__end__icons'>
                <Link to={""}><FaSearch /></Link>
                <Link to={""}><BiShoppingBag /> </Link>
                <Link className='navbar__hamburger' to={""}><GiHamburgerMenu /></Link>
            </div>
        </div>
    )
}

export default memo(Navbar)