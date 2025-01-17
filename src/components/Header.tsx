import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Header = () =>{
    return(
      <header className='header'>
      <h1 className='logo'>Donuts World</h1>
    <nav>
    <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/donuts">Donuts</Link>
      <Link href="/contact" >ContactUs</Link>
      <FaShoppingCart size={20} />
    </nav>
     </header>
    )

}

export default Header;