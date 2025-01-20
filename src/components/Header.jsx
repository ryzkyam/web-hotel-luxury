import React from "react";
import logo from "../asset/logo4.png";

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a>Layanan</a>
              <ul className="p-2">
                <li>
                  <a href="/FormBook">Home</a>
                </li>
                <li>
                  <a href="/Mainsec">Facilities</a>
                </li>
                <li>
                  <a href="/Carousel">Room</a>
                </li>
                <li>
                  <a href="/detailUser">Contact-Us </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/Main">Promo</a>
            </li>
          </ul>
        </div>
        <a className="text-xl h-10 w-40">
          <img src={logo} alt="keraton" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-sans text-lg font-semibold text-gray-900">
          <li>
            <a></a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/detailvila">Facilities</a>
          </li>
          <li>
            <a href="/detailHotel">Room</a>
          </li>
          <li>
            <a href="/contact">Contact-Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <button                 type="submit"
                className=" bg-black text-white py-2 px-4 rounded-md hover:bg-grey-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
        
            <a href="/LoginPage">Login</a>
          
        </button>
      </div>
    </div>
  );
}

export default Header;
