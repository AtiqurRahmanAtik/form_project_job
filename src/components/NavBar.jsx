import Link from 'next/link';
import React from 'react';

const NavBar = () => {

    const menuItems = <>
     <Link href="/"><li className="text-2xl font-bold ">Home</li></Link>
        <Link href="/about"><li  className="text-2xl font-bold ">About</li></Link>
        <Link href="/contact"><li className="text-2xl font-bold ">Contact</li></Link>
    </>;

    return (
        <div>
            <div className="navbar bg-green-400 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {
           menuItems
       }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">FontEnd</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  space-x-2  px-1">
     
     {
            menuItems
     }

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;