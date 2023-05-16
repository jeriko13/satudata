
/*eslint-disable*/
import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

// components

// import PagesDropdown from "components/PagesDropdown.js";

//Finds y value of given object
function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}


export default function Navbar(props) {
  
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropdownRef = useRef(null);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase flex items-center"
              to="/"
            >
              <img className="w-auto h-10 mr-3" src={process.env.PUBLIC_URL + '/banjarnegara.png'} alt="Workflow" />
              DATA STATISTIK SEKTORAL DAERAH
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-blueGray-600 lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
              
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <PagesDropdown />
              </li> */}

              {/* <li className="flex items-center">
                <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white cursor-pointer"
                onClick={() => window.scroll({top: findPos(document.getElementById("dashboard")), left: 0, behavior: 'smooth'})}>
                Dashboard & Dataset
                </a>
              </li> */}
              
{/*   
              <li className="relative">
  <a
    href="/Dashboard"
    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white cursor-pointer"
    onMouseEnter={() => setDropdownOpen(true)}
    onMouseLeave={() => setDropdownOpen(false)}
  >
    Dashboard
  </a>
  {dropdownOpen && (
    <ul
      ref={dropdownRef}
      className="absolute top-full left-0 w-full bg-white text-gray-700 border border-gray-300 rounded-b-lg z-50"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
        <a href="/Dashboard/ListUrusan">Sektoral</a>
      </li>
      <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
        <a href="/Dashboard/ListObjek">Dataset</a>
      </li>
    </ul>
  )}
</li> */}

                   
               <li className="flex items-center">
                <a href="/Dashboard/ListAspek" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white cursor-pointer">
                Dashboard RPD
                </a>
              </li>
              
               <li className="flex items-center">
                <a href="/Dashboard/ListUrusan" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white cursor-pointer">
                Dashboard & Sektoral
                </a>
              </li>

              <li className="flex items-center">
                <a href="/Dashboard/ListObjek" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white cursor-pointer">
                Dashboard & Dataset
                </a>
              </li>

              <li className="flex items-center">
                <a href="/#cari" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white cursor-pointer">
                Cari Data
                </a>
              </li>

              <li className="flex items-center">
                <a href="/#faq" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white cursor-pointer">
                FAQ
                </a>
              </li>

              <li className="flex items-center">
                <a href="/#peraturan" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white cursor-pointer">
                Peraturan Terkait
                </a>
              </li>

              <li className="flex items-center">
                <a href="/#tentang" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white cursor-pointer">
                Kontak Kami
                </a>
              </li>

              <li className="flex items-center">
                <a href="https://satudata.banjarnegarakab.go.id/satudata_backoffice/login" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white cursor-pointer">
                Login
                </a>
              </li>

              {/* <li className="flex items-center">
                <a href="/satudata_backoffice/login" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white cursor-pointer"
                onClick={() => window.scroll({top: findPos(document.getElementById("/satudata_backoffice/login")), left: 0, behavior: 'smooth'})}>
                Login
                </a>
              </li> */}

              {/* <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.instagram.com/kabupatenbanjarnegara/"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Instagram</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/bna_dinkominfo"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.youtube.com/channel/UCTbbEF2tvniXW06O-uzTDyQ"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-youtube text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Youtube</span>
                </a>
              </li> */}

          

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

